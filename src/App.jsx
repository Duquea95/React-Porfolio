import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from  './components/pages/HomePage/home';
import './App.css';
// import Hero from './components/Hero';
// import SplitCopy from './components/SplitCopy';
// import CardGrid from './components/CardGrid';
// import CopyCollection from './components/CopyCollection';
// import Contact from './components/Contact';
// import {HeroImage} from './Images';

const App = () => {
    return(
        <Router>
            {/* <Navbar/> */}
            <Switch>
                    <Route path='/' exact component={Home} />
            </Switch>
        </Router>    
    )
    
}
export default App;


{/* const[dimension, setDimension] = useState()

    useEffect(()=>{
        resizeCards()
    }, [])
    
    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeCards)

        return () => window.removeEventListener('resize', resizeListener)
    })

    const resizeCards = () => {
        setDimension(
            Math.min(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight,
            )
        )
    }

    console.log(dimension)
    return (
        <div className="app">
            <div className="body-wrapper">
                <Hero image={HeroImage} />
                <SplitCopy />
                <CopyCollection />
                <CardGrid />
                <Contact />
            </div>
        </div>
    ) */}