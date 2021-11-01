import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Product extends Component {
  render() {
    return (
      <div className="product__shop-product">
        <div className="product__img" style={{ backgroundImage: `url(${this.props.url})` }}></div>
        <div className="product__specifications">
          <div className="product__title">{this.props.name}</div>
          <div className="product__description">
            {this.props.year}
            <span>{this.props.mileage}</span>
            <span>{this.props.horsepower}</span>
            <span>{this.props.torque}</span>
          </div>
          <div className="product__price">{this.props.price}</div>
          <Link to={{ pathname: "/appointment", state: { image: this.props.url, name: this.props.name } }}>
            <button className="product__btn">MAKE AN APPOINTMENT</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Product;
