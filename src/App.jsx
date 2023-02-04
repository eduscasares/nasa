import React from 'react';
import { NasaData } from './axios/nasa.data';
import ListContainer from './components/containers/ListContainer';

const App = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>

            <h1 className="text-3xl font-bold">
                Welcome to your planet list!
            </h1>

            <ListContainer />
            <NasaData />
            
        </div>
    );
}

export default App;
