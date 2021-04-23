import React from 'react';
import './Navbar.css';

export default function Navbar({toggleQueueModal}) {
    return (
        <nav className="flex absolute w-full justify-center py-6 bg-transparent z-20">
            <div className="container px-4 flex justify-between align-center">
                <button className="text-brand-500 font-bold text-xl">PROTENUSFLIX</button>
                <div className="flex justify-between">
                    <button className="nav-link">About</button>
                    <button className="nav-link">Our mission</button>
                    <button className="nav-link">Learn more</button>
                    <button onClick={toggleQueueModal} className="outline-button queue-button transition-all duration-200 ease-in-out">My Queue</button>
                </div>
            </div>
        </nav>
    )
}
