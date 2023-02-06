import React from 'react';
import PropTypes from 'prop-types';
import { RocketLaunchIcon } from '@heroicons/react/24/solid'

const NewPlanet = ( { handleClick } ) => {
    return (
        <button onClick={ handleClick } className='btn-primary flex py-4 px-5 mt-10 rounded-xl bg-slate-800 text-white transition-opacity duration-150 hover:opacity-80'>
            <RocketLaunchIcon className='w-6 mr-3' />
            Trip to new planet!
        </button>
    );
}

NewPlanet.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default NewPlanet;
