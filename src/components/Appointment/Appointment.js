import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Appointment extends Component {
  render() {
    return (
      <>
        <div className="appointment__wrapper">
          <div className="appointment__page">
            <div
              className="appointment__img"
              style={{ backgroundImage: `url(${this.props.location.state.image})` }}
            ></div>
            <div className="appointment__description">
              Thank you ! Your appointment is going to be made, you chose{" "}
              <strong>{this.props.location.state.name}</strong>. We're going to call you in few days.
            </div>
            <Link to="/main" className="appointment__link">
              <div className="appointment__back-btn">
                <span>Back to shop</span>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Appointment;
