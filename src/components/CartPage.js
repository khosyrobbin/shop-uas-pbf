import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import './home-container/Home-container.css';
import HomeContainer from "./home-container/Home-container";
import { connect } from "react-redux";
import Navigation from "./navigation/Navigation";
import Cart from "./cart/Cart";


const ShopListPage = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        <div>
                <Navigation />
                <Cart />
        </div>
    );
};

const mapStoreToProps = (store) => {
    return { products: store.ItemListReducer }
};


export default connect(mapStoreToProps)(ShopListPage);