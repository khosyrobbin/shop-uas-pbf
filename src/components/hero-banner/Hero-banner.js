import React from 'react';
import './Hero-banner.css';
import Navigation from '../navigation/Navigation';
import firebaseConfig from "../../config";

const HeroBanner = () => {

    return (
        <div className="hero-banner row">
            <div className="text col-6 ">
                <h1>Neo OL Shop</h1>
                <p>Find what you need easely in our shop!   </p>
                <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
            </div>
        </div>

    );

}

export default HeroBanner;
