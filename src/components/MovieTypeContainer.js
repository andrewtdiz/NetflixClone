import React, {useState} from 'react'
import MovieDisplay from './MovieDisplay.js';
import movieData from '../moviesData.json';
import './MovieTypeContainer.css';

export default function MovieTypeContainer({movieType}) {
    const [containerOffsetIndex, setContainerOffsetIndex] = useState(0);

    const moveContainer = (direction) => {
        if((containerOffsetIndex+direction)<0) return
        if((containerOffsetIndex+direction) > movieData.filter(movie => movie.type===movieType).length-3) return 
        setContainerOffsetIndex(prev => prev+direction);
    }

    return (
        <div className="flex justify-center w-full py-12">
            <div className="container flex flex-col">
                <h1 className="text-2xl">{movieType}</h1>
                <div className="mt-6 relative overflow-x-hidden h-48">
                    <div 
                        onClick={() => moveContainer(-1)} 
                        className="z-10 movie-container-navigator left-0 items-start">
                        <h1 className="text-3xl">&lt;</h1>
                    </div>
                    <div className="flex absolute top-0 h-full transition-all duration-200 linear" style={{left: -containerOffsetIndex*21+'rem'}}>
                        {movieData.filter(movie=>movie.type===movieType).map(movie => (
                            <MovieDisplay key={movie.id} movie={movie}/>
                        ))}
                    </div>
                    <div 
                        onClick={() => moveContainer(1)} 
                        className="movie-container-navigator right-0 items-end">
                        <h1 className="text-3xl">&gt;</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
