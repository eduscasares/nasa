import React from 'react';
import Heading from './components/pure/Heading';
import ListItem from './components/containers/ListItem';

const App = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-800 min-h-screen py-2'>

            <div className='max-w-7xl'>

                <Heading />
                <ListItem />

            </div>
            
        </div>
    );
}

export default App;
