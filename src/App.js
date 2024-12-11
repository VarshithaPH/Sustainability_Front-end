// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Resources from './components/resources';
import Events from './components/events';
import Contact from './components/contact';
import Login from './components/login';
import Register from './components/register';
import './components/styles.css';
import Quiz from './components/quiz';  
import CertificateProvider from './components/Certificate';


import SDG1 from './components/sdg1';
import SDG2 from './components/sdg2';
import SDG3 from './components/sdg3';
import SDG4 from './components/sdg4';
import SDG5 from './components/sdg5';
import SDG6 from './components/sdg6';
import SDG7 from './components/sdg7';
import SDG8 from './components/sdg8';
import SDG9 from './components/sdg9';
import SDG10 from './components/sdg10';
import SDG11 from './components/sdg11';
import SDG12 from './components/sdg12';
import SDG13 from './components/sdg13';
import SDG14 from './components/sdg14';
import SDG15 from './components/sdg15';
import SDG16 from './components/sdg16';
import SDG17 from './components/sdg17';


const App = () => {
    return (
        <Router>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/events">Events</a>
                <a href="/contact">Contact</a>
                <a href="/resources">Resources</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/quiz/:lessonId" element={<Quiz />} />
                <Route path="/sdg1" element={<SDG1 />} />
                <Route path="/sdg2" element={<SDG2 />} />
                <Route path="/sdg3" element={<SDG3 />} />
                <Route path="/sdg4" element={<SDG4 />} />
                <Route path="/sdg5" element={<SDG5 />} />
                <Route path="/sdg6" element={<SDG6 />} />
                <Route path="/sdg7" element={<SDG7 />} />
                <Route path="/sdg8" element={<SDG8 />} />
                <Route path="/sdg9" element={<SDG9 />} />
                <Route path="/sdg10" element={<SDG10 />} />
                <Route path="/sdg11" element={<SDG11 />} />
                <Route path="/sdg12" element={<SDG12 />} />
                <Route path="/sdg13" element={<SDG13 />} />
                <Route path="/sdg14" element={<SDG14 />} />
                <Route path="/sdg15" element={<SDG15 />} />
                <Route path="/sdg16" element={<SDG16 />} />
                <Route path="/sdg17" element={<SDG17 />} />
                <Route path="/certificate/:lessonId" element={<CertificateProvider />} />
                

            </Routes>
        </Router>
    );
};

export default App;
