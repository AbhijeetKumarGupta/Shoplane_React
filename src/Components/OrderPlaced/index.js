import React, { Component } from "react";
import imgOp from "../../images/confirmImg.png";

class OrderPlaced extends Component {
  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <main>
        <div id="main-wrapper">
          <div id="img-wrapper">
            <img src={imgOp} alt="" />
          </div>
          <h3>Order Placed Successfully!!</h3>
          <p>We have sent you an email with the order details</p>
        </div>
      </main>
    );
  }
}

export default OrderPlaced;
