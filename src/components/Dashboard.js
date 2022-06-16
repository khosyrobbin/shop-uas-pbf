import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import HomeContainer from "./home-container/Home-container";

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        
        <div>
            <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
        </div>
    );
};

export default Dashboard;