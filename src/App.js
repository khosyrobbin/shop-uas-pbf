import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
// import Profiles from "./components/profile/Profiles";
// import ShopList from "./components/shop-list/ShopList";
import ProfilePage from "./components/ProfilePage";
import ShopListPage from "./components/ShopListPage";
import Product from "./components/product/Product";
class App extends Component {
  render() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/cart" component={CartPage} />
          
          <Route path="/shoplist" component={ShopListPage} />
          <Route exact path="/profiles" component={ProfilePage} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};
};
export default App;

