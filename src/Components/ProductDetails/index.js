import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Action";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPro: this.props.curProduct,
      curImg: this.props.curProduct.preview,
      curActive: 0,
    };
  }

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
    this.scrollToTop();
    var {
      name = "Name",
      brand = "Brand",
      price = 0,
      photos = [],
      description = "Description",
    } = this.state.curPro;
    return (
      <div id="mainDiv" key="productDet">
        <div id="imageLargeDiv">
          <img className="largeImage" src={this.state.curImg} alt="Preview" />
        </div>
        <div id="detailsDiv">
          <h1 id="name">{name}</h1>
          <h4 id="brand">{brand}</h4>
          <h3 id="priceHead">
            Price: Rs <span id="price">{price}</span>
          </h3>
          <p className="otherHead">Description</p>
          <p id="description">{description}</p>
          <h3 id="pp" className="otherHead">
            Product Preview
          </h3>
          <div id="smallImages">
            {photos.length > 0
              ? photos.map((item, index) => (
                  <img
                    className={
                      index === this.state.curActive
                        ? "smallImg active"
                        : "smallImg"
                    }
                    id={index}
                    src={item}
                    onClick={() => {
                      this.setState({ curImg: item });
                      this.setState({ curActive: index });
                    }}
                    key={index}
                    alt=""
                  />
                ))
              : "IMAGE"}
          </div>
          <div
            id="button"
            onClick={() => this.props.addProd(this.props.curProduct)}
          >
            Add to Cart
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  curProduct: state.currentProd,
});

const mapDispatchToProp = (dispatch) => ({
  addProd: (payload) => dispatch(addToCart(payload)),
});

export default connect(mapStateToProp, mapDispatchToProp)(Product);
