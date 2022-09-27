import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import Explore from './pages/Explore';
import SearchResults from './components/SearchResults';
import MovieInfo from './pages/MovieInfo';
import Footer from './components/Footer';
import MobileSideBar from './components/MobileSideBar';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <MobileSideBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="//movie/:id" element={<MovieInfo/>}/>
          <Route path="/explore" element={<Explore/>} />
          <Route path="/explore/movie/:id" element={<MovieInfo/>}/>
          <Route path="/searchresult" element={<SearchResults/>} />
          <Route path="/searchresult/movie/:id" element={<MovieInfo/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
