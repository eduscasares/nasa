import { useState } from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
// import PropTypes from 'prop-types';


const DateSelector = () => {

    return (
        <div className='flex gap-6 items-center'>

            <div className='flex justify-center items-center gap-1 max-h-12'>
                <CalendarDaysIcon className='w-6 text-white'/>
                <label className='text-white text-base' htmlFor="start-date">From date: </label>
                <input type="date" name="start-date" id="start-date" className='px-2 py-1 rounded-lg placeholder:text-gray-500' />
            </div>

            <div className='flex justify-center items-center gap-1 max-h-12'>
                <CalendarDaysIcon className='w-6 text-white'/>
                <label className='text-white text-base' htmlFor="end-date">To date: </label>
                <input type="date" name="end-date" id="end-date" className='px-2 py-1 rounded-lg placeholder:text-gray-500' />
            </div>

        </div>
    );
    
};


// DateSelector.propTypes = {

// };


export default DateSelector;
