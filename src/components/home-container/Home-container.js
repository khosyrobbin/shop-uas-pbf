import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroBanner from "../hero-banner/Hero-banner";
import ItemList from "../item-list/ItemList";
import './Home-container.css';

class HomeContainer extends Component {
    state = {
        products: []
    };

    render() {
        return (
            <div className="home-container">
                <HeroBanner />
                {/* <div className='item'>
                    <img src='https://source.unsplash.com/random/300x300/?ironing'></img>
                    <p>Selamat Datang di Online Shop kami!</p>
                </div> */}
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return { products: store.ItemListReducer }
};


export default connect(mapStoreToProps)(HomeContainer);
