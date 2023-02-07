import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='self-start mb-16'>
            <h1 className="text-2xl lg:text-6xl font-bold mb-5 md:text-5xl sm:text-2xl">
                Ups! Something went wrong.
            </h1>
                
            <Link className='text-lg font-thin md:text-2xl tracking-wider sm:text-lg text-white' to={ '/' }>Get me out of here!</Link>

        </div>
    );
}

export default NotFound;
