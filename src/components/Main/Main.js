import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import logo from "../../images/car.png";
import arr from "../../images/menu-arrow-main.png";
import filt from "../../images/filter-main.png";
import carlogo from "../../images/car-main.png";
import motologo from "../../images/motorcycle-main.png";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuShown: false,
      isArrowRotated: false,
      isFilterShown: false,
      isCarFilterOn: false,
      searchBarValue: "",
      isMotoFilterOn: false,
      vehiclesList: [],
      count: 0,
    };

    this.handleSearchBarValue = this.handleChange.bind(this, "searchBarValue");
  }

  handleChange = (keyName, e) => {
    this.setState({
      [keyName]: e.target.value,
    });
  };

  handleMenu = () => {
    this.setState({
      isMenuShown: !this.state.isMenuShown,
      isArrowRotated: !this.state.isArrowRotated,
    });
  };

  handleFilter = () => {
    this.setState({
      isFilterShown: !this.state.isFilterShown,
    });
  };

  handleCar = () => {
    this.setState({
      isCarFilterOn: !this.state.isCarFilterOn,
    });
  };

  handleMoto = () => {
    this.setState({
      isMotoFilterOn: !this.state.isMotoFilterOn,
    });
  };

  generateList = () => {
    if (
      (this.state.isCarFilterOn === true && this.state.isMotoFilterOn === true) ||
      (this.state.isCarFilterOn === false && this.state.isMotoFilterOn === false)
    ) {
      return this.state.vehiclesList
        .filter((vehicle) => vehicle[1].name.includes(this.state.searchBarValue))
        .map((vehicle, index) => {
          return (
            <Product
              key={vehicle.id}
              name={vehicle[1].name}
              year={vehicle[1].year}
              mileage={vehicle[1].mileage}
              horsepower={vehicle[1].horsepower}
              torque={vehicle[1].torque}
              price={vehicle[1].price}
              url={vehicle[1].url}
            />
          );
        });
    } else if (this.state.isCarFilterOn === true) {
      return this.state.vehiclesList
        .filter((vehicle) => vehicle[1].name.includes(this.state.searchBarValue) && vehicle[1].type === "car")
        .map((vehicle, index) => {
          return (
            <Product
              key={vehicle.id}
              name={vehicle[1].name}
              year={vehicle[1].year}
              mileage={vehicle[1].mileage}
              horsepower={vehicle[1].horsepower}
              torque={vehicle[1].torque}
              price={vehicle[1].price}
              url={vehicle[1].url}
            />
          );
        });
    } else if (this.state.isMotoFilterOn === true)
      return this.state.vehiclesList
        .filter((vehicle) => vehicle[1].name.includes(this.state.searchBarValue) && vehicle[1].type === "motorcycle")
        .map((vehicle, index) => {
          return (
            <Product
              key={vehicle.id}
              name={vehicle[1].name}
              year={vehicle[1].year}
              mileage={vehicle[1].mileage}
              horsepower={vehicle[1].horsepower}
              torque={vehicle[1].torque}
              price={vehicle[1].price}
              url={vehicle[1].url}
            />
          );
        });
  };

  componentDidMount() {
    fetch("vehicles.json", { headers: { "Content-Type": "application/json", Accept: "application/json" } })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        this.setState({ vehiclesList: Object.entries(myJson.vehicles) }, () => console.log(this.state.vehiclesList));
      });
  }

  render() {
    return (
      <>
        {/* NAV */}
        <div className="main__nav">
          <span className="main__name">
            lux-moto<img src={logo} className="main__logo" alt="logo"></img>
          </span>
          <div className="main__navigation">
            <span className="main__filter-btn" onClick={this.handleFilter}>
              Filter<img src={filt} className="main__fil-img" alt="filter symbol"></img>
            </span>
            <span className="main__menu-btn" onClick={this.handleMenu}>
              Menu
              <img
                src={arr}
                className={this.state.isArrowRotated ? "main__arr-img main__arr-img-click-transform" : "main__arr-img"}
                alt="menu arrow"
              ></img>
            </span>
          </div>
          <div className="main__menu" style={this.state.isMenuShown ? { display: "block" } : { display: "none" }}>
            <Link to="/profile/:user" className="main__menu-link">
              <div>Settings</div>
            </Link>
            <hr></hr>
            <Link to="/signin" className="main__menu-link">
              <div>Sign out</div>
            </Link>
          </div>
        </div>

        {/* FILTER OPTIONS */}
        <div
          className={
            this.state.isFilterShown ? "main__filter main__filter-visible" : "main__filter main__filter-hidden"
          }
        >
          <div className="main__filter-car-btn-container">
            <div className="main__filter-car-btn-wrapper" onClick={this.handleCar}>
              <div
                className="main__filter-car-btn-description"
                style={this.state.isCarFilterOn ? { color: "red" } : { color: "white" }}
              >
                CARS
              </div>
              <img src={carlogo} className="main__filter-car-btn-img" alt="car img"></img>
            </div>
            <div className="main__filter-car-shape-wrapper">
              <div className="main__filter-car-shape"></div>
            </div>
          </div>

          <div className="main__filter-search-container">
            <div className="main__filter-search-input-description">Model name</div>
            <input onChange={this.handleSearchBarValue}></input>
          </div>

          <div className="main__filter-moto-btn-container">
            <div className="main__filter-moto-shape-wrapper">
              <div className="main__filter-moto-shape"></div>
            </div>
            <div className="main__filter-moto-btn-wrapper" onClick={this.handleMoto}>
              <div
                className="main__filter-car-moto-description"
                style={this.state.isMotoFilterOn ? { color: "red" } : { color: "white" }}
              >
                MOTORCYCLES
              </div>
              <img src={motologo} className="main__filter-moto-btn-img" alt="moto img"></img>
            </div>
          </div>
        </div>

        <div
          className={
            this.state.isFilterShown ? "main__shop main__shop-with-filter" : "main__shop main__shop-without-filter"
          }
        >
          {this.generateList()}
        </div>
      </>
    );
  }
}

export default Main;
