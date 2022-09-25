import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
const API_KEY ='13a400176797127bc7c83a5655852e2a'

const Landing = () => {
    let navigate = useNavigate();
    const [randomMovie, setRandomMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const [inputValue, setInputValue] = useState("");

    function onSearch(){
        if(inputValue === ""){
            alert("The field cannot be empty");
        } else {
            navigate('/searchresult',{state:{name:{inputValue}}});
        }
    }

    useEffect(() => {
        async function getTrendingMovies() {
            try{
                const response = await axios
                .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`)
                .then(res => {
                    const randomNumber = Math.floor(Math.random() * 20);
                    setRandomMovie(res.data.results[randomNumber])
                    setLoading(false);
                })
            } catch(e) {
                console.log(e);
            }
        }
        getTrendingMovies();
    }, [])

  return (
    <section className="landing">
        <div className="input__wrapper">
            <SearchIcon onClick={onSearch}/> 
            <input 
                type="text" 
                className="landing__input" 
                value={inputValue}
                placeholder={loading ? "Search Movies" : `${randomMovie.title}`}
                onChange={(event) => setInputValue(event.target.value)}
                    onKeyPress={(event) => {
                        if(event.key === "Enter"){
                            onSearch();
                        }
                    }
                }
            />
        </div>
        <figure className="landing__img--wrapper">
            {
                loading ? (
                    <div className="skeleton"></div>
                ) : (
                    <img 
                        src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`} 
                        alt="landing page image" 
                        className="landing__img" 
                    />
                )
            }
        </figure>
        
            <a href="#trending-movies" className='down--icon'>
                <ArrowCircleDownIcon/>
            </a>
    </section>
  )
}

export default Landing
