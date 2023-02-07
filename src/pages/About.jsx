import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='self-start mb-16'>
            <h1 className="text-2xl lg:text-6xl font-bold mb-5 md:text-5xl sm:text-2xl">
                About
            </h1>
                
            <p className='text-lg font-thin md:text-2xl tracking-wider sm:text-lg text-white mb-6'>Proudly develop by Edu 🥸, a moustached Front-End develop based in Cordoba, Spain</p>
            <Link className='text-lg font-bold md:text-2xl tracking-wider sm:text-lg text-white' to={ '/contact' }>Ready to get in touch?</Link>

        </div>
    );
}

export default About;
