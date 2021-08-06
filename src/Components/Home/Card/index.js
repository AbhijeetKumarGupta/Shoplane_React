import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      brand: props.brand,
      preview: props.preview,
      price: props.price,
    };
  }
  render() {
    const { name, brand, price, preview } = this.state;
    return (
      <>
        <div className="img">
          <img src={preview} alt={name} />
        </div>
        <div className="details">
          <h3 className="prodName">{name}</h3>
          <h4 className="prodBrand">{brand}</h4>
          <p className="prodPrice">Rs {price}</p>
        </div>
      </>
    );
  }
}

export default Card;
