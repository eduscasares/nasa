import React from 'react';
import nasa from '../../assets/nasa.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar flex justify-around items-center gap-5 bg-slate-50 rounded-full absolute bottom-8 pr-5'>
            <img className='w-20' src={ nasa } alt="Right" />
            <Link className='uppercase text-sm' to={ '/about' }>About</Link>
            <Link className='uppercase text-sm' to={ '/planets' }>Planets</Link>
            <Link className='uppercase text-sm' to={ '/contact' }>Contact</Link>
        </nav>
    );
}

export default Navbar;
