// import { useState } from 'react';
import ListItem from '../pure/ListItem';
// import PropTypes from 'prop-types';
import { RocketLaunchIcon } from '@heroicons/react/24/solid'

// const [planet, setPlanet] = useState([])

const ListContainer = () => {
    return (
        <div>
            Planet list

            <ListItem />

            <button className='flex py-4 px-5 rounded-xl bg-slate-800 text-white transition-opacity duration-150 hover:opacity-80'>
                <RocketLaunchIcon className='w-6 mr-3' />
                Obtain new planet
            </button>
        </div>
    );
};


// ListContainer.propTypes = {

// };


export default ListContainer;
