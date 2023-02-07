import React from 'react';
import right from '../../assets/right.svg'

const Heading = () => {
    return (
        <div className='self-start mb-16'>
            <h1 className="text-2xl lg:text-6xl font-bold mb-5 md:text-5xl sm:text-2xl">
                Welcome to your planet list
            </h1>

            <div className='flex justify-between'>
                <p className='text-lg font-thin md:text-2xl tracking-wider sm:text-lg'>An awesome day to get shoked seeing beautiful pictures!</p>
                <img className='lateral-bounce w-6' src={ right } alt="Right" />
           </div>
        </div>
    );
}

export default Heading;
