import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signinLogin: "",
      signinPassword: "",
      signinInvalidPopup: false,
      signinWarningMessage: "Something gone wrong",
    };

    this.handleLoginChange = this.handleChange.bind(this, "signinLogin");
    this.handlePasswordChange = this.handleChange.bind(this, "signinPassword");
  }

  handleChange = (keyName, e) => {
    this.setState({
      [keyName]: e.target.value,
    });
  };

  handleSigninInvalidPopup = (message) => {
    this.setState({
      signinInvalidPopup: true,
      signinWarningMessage: message,
    });

    setTimeout(() => {
      this.setState({
        signinInvalidPopup: false,
      });
    }, 30000);
  };

  handleSubmit = (event) => {
    if (this.state.signinLogin === "" || this.state.signinPassword === "") {
      event.preventDefault();
      this.handleSigninInvalidPopup("Please, fill all fields");
    } else if (this.state.signinLogin === "test" || this.state.signinPassword === "test") {
      // NEED CHECK WITH DATABASE
      event.preventDefault();
      this.handleSigninInvalidPopup("The entered data is incorrect, try again !");
    } else {
      event.preventDefault();
      console.log(this.state);
      this.props.history.push("/main");
    }
  };

  render() {
    return (
      <>
        <div className="signin">
          <h1>Sign in</h1>

          <div className="signin__form-wrapper">
            <form className="signin__form">
              <div className="signin__input-wrapper">
                <label>Login</label>
                <br></br>
                <input onChange={this.handleLoginChange}></input>
              </div>

              <div className="signin__input-wrapper">
                <label>Password</label>
                <br></br>
                <input type="password" onChange={this.handlePasswordChange}></input>
              </div>

              <input
                className="signin__submit"
                type="submit"
                value="Sign in"
                onClickCapture={this.handleSubmit}
              ></input>
              <br></br>

              <Link to="/register" className="signin__register-link">
                Don't have an account yet ? Create one !
              </Link>

              <p
                className="signin__invalid"
                style={this.state.signinInvalidPopup ? { display: "block" } : { display: "none" }}
              >
                {this.state.signinWarningMessage}
              </p>
            </form>
          </div>
        </div>

        <div className="signin__decoration"></div>
      </>
    );
  }
}

export default Signin;
