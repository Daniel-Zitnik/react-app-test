// react
import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
// assets
import './styles/main.scss';
import './styles/Navigation.scss';
// pages
import Home from './pages/Home';
import Tunes from './pages/Tunes';
import About from './pages/About';

function App() {
    return (
        <div className="App">
            <header style={{ minHeight: `calc( 100vh - 24px )` }}>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/tunes">Tunes</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>

            <main style={{ minHeight: `calc( 100vh - 24px )` }}>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/tunes' Component={Tunes} />
                    <Route path='/about' Component={About} />
                </Routes>
            </main>

            <footer>

            </footer>
        </div>
    );
}

export default App;
