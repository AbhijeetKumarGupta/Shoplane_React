import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import userImg from "../../images/user.jpg";

class Topbar extends Component {
  render() {
    return (
      <header>
        <div id="navMenu">
          <Link id="logo" to="/Shoplane_React/">
            <span>SHOP</span>LANE
          </Link>
          <div id="productBrowsingMenu">
            <Link className="pbMenuOption" to="/Shoplane_React/">
              Home
            </Link>
            <Link
              className="pbMenuOption"
              to="/Shoplane_React/#clothing-section"
            >
              Clothings
            </Link>
            <Link
              className="pbMenuOption"
              to="/Shoplane_React/#accessory-section"
            >
              Accessories
            </Link>
          </div>
          <div id="userDataMenu">
            <i className="fas fa-search" aria-hidden="true" />
            <div id="cart-wrapper">
              <p id="cart-count">{this.props.cart.length}</p>
              <Link to="/Shoplane_React/checkout">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
            </div>
            <img src={userImg} alt="img" />
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProp = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProp, null)(Topbar);
