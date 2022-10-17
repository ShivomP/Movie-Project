import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
import MovieCard from './MovieCard'
import NoResults from './NoResults'
import SkeletonCard from './SkeletonCard'
import SearchIcon from '@mui/icons-material/Search';

const API_KEY = '13a400176797127bc7c83a5655852e2a'

const SearchResults = () => {
  let navigate = useNavigate();
  const location = useLocation()
  const movieTitle = (location.state.name.inputValue)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function getMovies(){
      try{
        const reponse = await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`)
        .then(res => {
          const completedMovies = res.data.results.filter(movie => movie.backdrop_path !== "")
          setMovies(completedMovies)
          setMovies(res.data.results.filter(movie => movie.backdrop_path !== null))
          setLoading(false)
        })
      }catch(e){
        console.log(e)
      }
    }
    getMovies()
  }, [])

  function onSearch(){
    if(inputValue.trim() === ""){
        alert("The field cannot be empty");
    } else {
        navigate('/searchresult',{state:{name:{inputValue}}});
    }
  }

  function refresh(){
    window.location.reload(false)
  }

  function filterMovies(filter){
    if(filter === "RATING"){
        setMovies(movies.slice()
                        .sort((a,b) => b.vote_average - a.vote_average));
    } else if (filter === "OLDEST"){
        setMovies(movies.slice()
                        .sort((a,b) => new Date(a.release_date) - new Date(b.release_date)));
    } else if (filter === "LATEST"){
        setMovies(movies.slice()
                        .sort((a,b) => new Date(b.release_date) - new Date(a.release_date)));
    }
  }
  return (
    <section id='search__result'>
      <div className="container">
        <div className="row">
        <div className="results__wrapper">
            <SearchIcon onClick={onSearch}/> 
            <input 
                type="text" 
                className="results__input" 
                value={inputValue}
                placeholder="Search Movies"
                onChange={(event) => setInputValue(event.target.value)}
                    onKeyPress={(event) => {
                        if(event.key === "Enter"){
                          refresh(); onSearch(); 
                        }
                    }
                }
            />
        </div>
          <div className="search__result--wrapper">
            {
              movies.length > 0 && (
                <div className="search__result--header">
                  <span className="search__result--from-user">
                    Results for: <span className="from-user">{movieTitle}</span>
                  </span>
                  <select 
                    id="filter"
                    defaultValue="DEFAULT"
                    onChange={(event) => filterMovies(event.target.value)}>
                    <option value="DEFAULT" disabled>
                        Sort
                    </option>
                    <option value="RATING">
                        Rating
                    </option>
                    <option value="OLDEST">
                        Release date: Oldest
                    </option>
                    <option value="LATEST">
                        Release date: Newest
                    </option>
                  </select>
                </div>
              )
            }
            <div className="movies--wrapper">
            {
              loading ? (
                  <>
                      <SkeletonCard />
                      <SkeletonCard />
                      <SkeletonCard />
                  </>
              ) : (
                  movies.length > 0 ? (
                      movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
                  ) : (
                      <NoResults />
                  )
              )
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchResults
