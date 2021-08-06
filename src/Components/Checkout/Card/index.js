import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name = "Name", price = 0, preview, quantity = 0 } = this.props;
    return (
      <div className="addedProdCard">
        <div className="prodAddedImg">
          <img src={preview} alt="Product" />
        </div>
        <div className="prodAddedDetails">
          <h4>{name}</h4>
          <p>x{quantity}</p>
          <p>Amount: Rs {price}</p>
        </div>
      </div>
    );
  }
}

export default Card;
