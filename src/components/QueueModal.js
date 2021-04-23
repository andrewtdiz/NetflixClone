import React, {useContext} from 'react'
import QueueContext from '../queueContext.js';

export default function QueueModal({toggleQueueModalDisplay, isQueueModalShowing, queue}) {
    const {dispatch} = useContext(QueueContext);

    return (
        <div className={"transition-all duration-300 ease-in-out fixed h-full top-0 right-0 w-1/3 bg-white z-50 text-black shadow-lg " + (!isQueueModalShowing && "mr-neg-one-third")}>
          <button onClick={toggleQueueModalDisplay} className="p-3 outline-none">X</button> 
          <div className="flex flex-col px-2">
            <h1 className="text-2xl font-medium border-b">My Queue</h1>
            <ol className="p-2 list-inside list-decimal">
              {queue.length>0 
              ? queue.map((movie, ind) => (
                <li key={movie.id} className="flex justify-between py-1">
                  <p>{ind+1}. {movie.title}</p>
                  <div>
                    {ind!==0 && 
                        <button 
                            className="mr-6" 
                            onClick={() => dispatch({type: "UP", payload: {ind}})}
                        >
                            ↑
                        </button>
                    }
                    {ind!==queue.length-1 && 
                        <button 
                            className="mr-6" 
                            onClick={() => dispatch({type: "DOWN", payload: {ind}})}
                        >
                            ↓
                        </button>
                    }
                    <button 
                        className="bg-red-500 px-2 text-white rounded" 
                        onClick={() => dispatch({type: "REMOVE", payload: {ind}})}
                    >
                        Remove
                    </button>
                  </div>
                </li>
              ))
              : <p className="text-xs">No movies here!</p>}
            </ol>
            
          </div>
        </div>
    )
}
