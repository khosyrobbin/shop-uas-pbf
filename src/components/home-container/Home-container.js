import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroBanner from "../hero-banner/Hero-banner";
import './Home-container.css';

class HomeContainer extends Component {
    state = {
        products: []
    };

    render() {
        return (
            <div className="home-container">
                <HeroBanner />
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return { products: store.ItemListReducer }
};


export default connect(mapStoreToProps)(HomeContainer);
