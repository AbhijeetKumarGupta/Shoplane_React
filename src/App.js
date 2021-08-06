import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Product from "./Components/ProductDetails";
import Topbar from "./Components/Topbar";
import OrderPlaced from "./Components/OrderPlaced";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route path="/Shoplane_React/" exact component={Home} />
          <Route path="/Shoplane_React/product" component={Product} />
          <Route path="/Shoplane_React/checkout" component={Checkout} />
          <Route path="/Shoplane_React/orderPlaced" component={OrderPlaced} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
