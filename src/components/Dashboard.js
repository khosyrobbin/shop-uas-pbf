import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import HomeContainer from "./home-container/Home-container";
import HeroBanner from "./hero-banner/Hero-banner";
import './home-container/Home-container.css';


const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="home-container">
                <HeroBanner />
        </div>
    );
};

export default Dashboard;