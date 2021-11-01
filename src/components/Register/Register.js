import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regLogin: "",
      regEmail: "",
      regPassword: "",
      regRepeatPassword: "",
      regInvalidPopup: false,
      regWarningMessage: "Something gone wrong",
    };

    this.handleLoginChange = this.handleChange.bind(this, "regLogin");
    this.handleEmailChange = this.handleChange.bind(this, "regEmail");
    this.handlePasswordChange = this.handleChange.bind(this, "regPassword");
    this.handleRepeatPasswordChange = this.handleChange.bind(this, "regRepeatPassword");
    this.handleInvalidPopupChange = this.handleChange.bind(this, "regInvalidPopup");
  }

  handleChange = (keyName, e) => {
    this.setState({
      [keyName]: e.target.value,
    });
  };

  handleRegInvalidPopup = (message) => {
    this.setState({
      regInvalidPopup: true,
      regWarningMessage: message,
    });

    setTimeout(() => {
      this.setState({
        regInvalidPopup: false,
      });
    }, 30000);
  };

  handleSubmit = (event) => {
    // eslint-disable-next-line
    const emailRegex =
      // eslint-disable-next-line
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (
      this.state.regLogin === "" ||
      this.state.regEmail === "" ||
      this.state.regPassword === "" ||
      this.state.regRepeatPassword === ""
    ) {
      event.preventDefault();
      this.handleRegInvalidPopup("Please, fill all fields");
    } else if (this.state.regLogin === "test") {
      // NEED CHECK WITH DATABASE
      event.preventDefault();
      this.handleRegInvalidPopup("Username is already taken");
    } else if (this.state.regEmail === "test") {
      // NEED CHECK WITH DATABASE
      event.preventDefault();
      this.handleRegInvalidPopup("Email is already taken");
    } else if (!emailRegex.test(this.state.regEmail)) {
      event.preventDefault();
      this.handleRegInvalidPopup("Email is invalid");
    } else if (this.state.regPassword.length < 8) {
      event.preventDefault();
      this.handleRegInvalidPopup("Password is too short :\\");
      // eslint-disable-next-line
    } else if (this.state.regPassword !== this.state.regRepeatPassword) {
      event.preventDefault();
      this.handleRegInvalidPopup("Passwords are not the same");
    } else {
      event.preventDefault();
      console.log(this.state);
      this.props.history.push("/signin");
    }
  };
  render() {
    return (
      <>
        <div className="register">
          <h1>Register</h1>
          <div className="register__form-wrapper">
            <form className="register__form">
              <div className="register__input-wrapper">
                <label>Login</label>
                <input onChange={this.handleLoginChange}></input>
              </div>
              <div className="register__input-wrapper">
                <label>E-mail</label>
                <input type="email" onChange={this.handleEmailChange}></input>
              </div>
              <div className="register__input-wrapper">
                <label>Password</label>
                <input type="password" onChange={this.handlePasswordChange}></input>
              </div>
              <div className="register__input-wrapper">
                <label>Repeat password</label>
                <input type="password" onChange={this.handleRepeatPasswordChange}></input>
              </div>
              <input className="register__submit" type="submit" value="Register" onClick={this.handleSubmit}></input>
              <br></br>
              <Link to="/signin" className="register__login-link">
                Already have an account ? Sign in !
              </Link>
              <p
                className="register__invalid"
                style={this.state.regInvalidPopup ? { display: "block" } : { display: "none" }}
              >
                {this.state.regWarningMessage}
              </p>
            </form>
          </div>
        </div>

        <div className="register__decoration"></div>
      </>
    );
  }
}

export default Register;
