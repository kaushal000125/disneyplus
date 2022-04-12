import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LogInScreen from './Components/LoginInScreen';
import Detail from './Components/Home/Detail';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
              
                <Routes>
         <Route  path="/" element={ <LogInScreen /> } />
         <Route path="/home" element={<Home />} />
         <Route path="/detail/:id" element={<Detail />} />
         </Routes>

                <Footer/>
            </Router>
        </>
    );
};

export default App;