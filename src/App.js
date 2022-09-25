import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import Explore from './pages/Explore';
import SearchResults from './components/SearchResults';
import MovieInfo from './pages/MovieInfo';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/searchresult" element={<SearchResults/>} />
          <Route path="/movie:id" element={<MovieInfo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
