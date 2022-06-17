import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './Navigation.css';
import firebaseConfig from "../../config";

class Navigation extends Component {
    state = {
        count: 0,
        openCartWindow: false
    }

    componentDidMount() {
        this.getCount()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cartItems !== this.props.cartItems) {
            this.getCount();
        }
    }

    getCount() {
        let count1 = 0;
        const prevCount = this.state.count;
        if (this.props.cartItems.products.length > 0) {
            this.props.cartItems.products.map((product) => {
                count1 = count1 + product.count;
            })
        }
        this.setState({ count: count1 }, () => {
            this.state.count > 0 && this.state.count > prevCount && window.location.href.indexOf('cart') === -1
                ? this.setState({ openCartWindow: true }) : this.setState({ openCartWindow: false });
        });

    }

    navigateToCart() {
        this.closeCartWindow();
        this.props.history.push(`/cart`);
    }

    closeCartWindow() {
        this.setState({ openCartWindow: false });
    }

    render() {
        return (
            <div className="navigation row">
                <div className="col-12 items">
                    <ul>
                        <li><Link to={`/dashboard`}>HOME</Link></li>
                        <li><Link to={`/shopList`}>SHOP</Link></li>
                        <li><Link to={`/cart`}>CART</Link></li>
                        <li><Link to={`/profiles`}>PROFILE</Link></li>
                        <li><Link onClick={() => firebaseConfig.auth().signOut()}>SIGN OUT</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        products: store.ItemListReducer,
        cartItems: store.CartItemReducer
    }
};

export default withRouter(connect(mapStoreToProps)(Navigation));
