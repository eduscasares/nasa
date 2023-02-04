import React from 'react';
import { NasaData } from './axios/nasa.data';
import ListContainer from './components/containers/ListContainer';
import Heading from './components/pure/Heading';

const App = () => {
    return (
        <div className='bg-slate-800 min-h-screen py-2'>

            <Heading />
            <ListContainer />
            <NasaData />
            
        </div>
    );
}

export default App;
