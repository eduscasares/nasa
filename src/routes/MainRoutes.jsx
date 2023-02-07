import React from 'react';

// Components
import Welcome from '../pages/Welcome'
import PlanetList from '../pages/PlanetList'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/notFound';
import Navbar from '../components/pure/Navbar';

// Routes system
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';


const MainRoutes = () => {
    return (
        <>

            <Router>

                <Navbar />

                <Routes>

                    <Route exact path='/' element={ <Welcome /> } />
                    <Route exact path='planets' element={ <PlanetList /> }/>
                    <Route exact path='contact' element={ <Contact /> }/>
                    <Route exact path='about' element={ <About /> } />
                    <Route path='*' element={ <NotFound /> }/>

                </Routes>


            </Router>
            
        </>
    );
}

export default MainRoutes;
