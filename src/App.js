import React, { useReducer, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import MovieTypeContainer from './components/MovieTypeContainer.js';
import HeroSection from './components/HeroSection.js';
import QueueModal from './components/QueueModal.js';
import movieData from './moviesData.json';
import QueueContext from './queueContext.js';
import queueReducer from './queueReducer.js';

function App() {
  const [queue, dispatch] = useReducer(queueReducer, []);
  const [isQueueModalShowing, setIsQueueModalShowing] = useState(false);

  const toggleQueueModalDisplay = () => {
    setIsQueueModalShowing(prev => !prev)
  }

  return (
    <QueueContext.Provider value={{queue, dispatch}}> 
      <div className="relative bg-background-500 text-white">
        <QueueModal toggleQueueModalDisplay={toggleQueueModalDisplay} isQueueModalShowing={isQueueModalShowing} queue={queue}/>
        <Navbar toggleQueueModal={toggleQueueModalDisplay}/>
        <HeroSection movie={movieData.find(movie=>movie.type==="Hero")} />
        <MovieTypeContainer movieType={"Continue Watching"} />
        <MovieTypeContainer movieType={"Trending Now"} />
        <MovieTypeContainer movieType={"Latest Premiere"} />
      </div>
    </QueueContext.Provider>
  );
}

export default App;
