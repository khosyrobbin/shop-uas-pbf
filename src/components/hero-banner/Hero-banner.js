import React from 'react';
import './Hero-banner.css';
import { Link } from 'react-router-dom';
import firebaseConfig from '../../config';
const HeroBanner = () => {
    return (
        <div className="hero-banner row">      
            <div className="text col-12 ">
                <h1>Neo OL Shop</h1>
                <p>Find what you need easely in our shop!   </p>
            </div>
        </div>
    );

}

export default HeroBanner;
