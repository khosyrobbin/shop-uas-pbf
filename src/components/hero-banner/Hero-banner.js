import React from 'react';
import './Hero-banner.css';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import firebaseConfig from "../../config";

const HeroBanner = () => {

    return (
        <div className="hero-banner row">
            <div className="col-8 items">
                <ul>
                    <li><Link to={`/dashboard`}>HOME</Link></li>
                    <li><Link to={`/shoplist`}>SHOP</Link></li>
                    <li><Link to={`/cart`}>CART</Link></li>
                    <li><Link to={`/profiles`}>PROFILE</Link></li>
                    <li><Link onClick={() => firebaseConfig.auth().signOut()}>SIGN OUT</Link></li>
                </ul>
            </div>
            
            <div className="text col-6 ">
                <h1>Neo OL Shop</h1>
                <p>Find what you need easely in our shop!</p>
            </div>
        </div>

    );

}

export default HeroBanner;
