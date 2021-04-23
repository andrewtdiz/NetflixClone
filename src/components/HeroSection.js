import React, { useContext } from 'react'
import QueueContext from '../queueContext.js';

export default function HeroSection({movie, addToQueue}) {
    const {dispatch} = useContext(QueueContext);

    return (
        <div className="w-full relative flex justify-center" style={{height: '80vh'}}>
            <div className="container flex z-10">
                <div className="flex flex-col justify-center ">
                    <h1 className="text-brand-500 font-bold text-xl">EXCLUSIVE</h1>
                    <h1 className="mt-2 text-6xl font-bold text-white">{movie.title}</h1>
                    <div className="flex mt-6">
                        <button className="add-to-queue-button" onClick={() => dispatch({type:"ADD", payload: {id: movie.id}})}>+Add to my queue</button>
                    </div>
                    <div className="mt-6 w-3/4">
                        <h2 className="text-lg font-medium">{movie.heading}</h2>
                        <h3 className="text-white font-light mt-2">{movie.subheading}</h3>
                    </div>
                </div>
            </div>
            <img alt="night-sky" className="absolute z-0 h-full w-full object-cover" src={movie.img} />
        </div>
    )
}
