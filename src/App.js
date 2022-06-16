import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";

import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import Profiles from "./components/profile/Profiles";

import Navigation from "./components/navigation/Navigation";
import HomeContainer from "./components/home-container/Home-container";
import ShopList from "./components/shop-list/ShopList";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Navigation />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/shoplist" component={ShopList} />
          <Route exact path="/profiles" component={Profiles} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;