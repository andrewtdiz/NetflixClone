import React, {useState, useContext} from 'react'
import QueueContext from '../queueContext.js';

export default function MovieDisplay({movie}) {
    const {dispatch} = useContext(QueueContext);
    const [hovering, setHovering] = useState(false);

    return (
        <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="w-80 h-full bg-gray-100 rounded mr-4 relative rounded-xl flex flex-col justify-center items-center cursor-pointer overflow-hidden">
            <img 
                alt="castle" 
                className="z-0 absolute top-0 w-full h-full object-cover rounded-lg transition-all duration-300 ease-in-out" 
                style={{transform: hovering ? 'scale(1.1, 1.1)' : ''}} 
                src={movie.img}
            />
            <h1 
                className="z-10 text-xl text-shadow text-center font-bold text-white pointer-events-none"
            >{movie.title}</h1>
            <button 
                className={"z-10 add-to-queue-button " + (hovering ? "opacity-100" : "opacity-0")}
                 onClick={() => dispatch({type:"ADD", payload:{id:movie.id}})}
            >+ Add to queue</button>
        </div>
    )
}
