import React from 'react';
import { NasaData } from './axios/nasa.data';
import ListContainer from './components/containers/ListContainer';
import Heading from './components/pure/Heading';

const App = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-800 min-h-screen py-2'>

            <div className='max-w-7xl'>

                <Heading />
                <ListContainer />
                <NasaData />

            </div>
            
        </div>
    );
}

export default App;
