import React, { Component } from "react";
import { Link } from "react-router-dom";

export class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileUser: "",
      profileEmail: "",
      profilePassword: "",
      profileInvalidPopup: false,
      profileWarningMassage: "Something gone wrong",
    };

    this.handleLoginChange = this.handleChange.bind(this, "profileUser");
    this.handleEmailChange = this.handleChange.bind(this, "profileEmail");
    this.handlePasswordChange = this.handleChange.bind(this, "profilePassword");
    this.handleInvalidPopupChange = this.handleChange.bind(this, "profileInvalidPopup");
  }

  handleChange = (keyName, e) => {
    this.setState({
      [keyName]: e.target.value,
    });
  };

  handleProfileInvalidPopup = (message) => {
    this.setState({
      profileInvalidPopup: true,
      profileWarningMassage: message,
    });

    setTimeout(() => {
      this.setState({
        profileInvalidPopup: false,
      });
    }, 30000);
  };

  handleSubmit = (event) => {
    // eslint-disable-next-line
    const emailRegex =
      // eslint-disable-next-line
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (this.state.profileUser === "" || this.state.profileEmail === "" || this.state.profilePassword === "") {
      event.preventDefault();
      this.handleProfileInvalidPopup("Please, fill all fields");
    } else if (this.state.profileUser === "test") {
      // NEED CHECK WITH DATABASE
      event.preventDefault();
      this.handleProfileInvalidPopup("Username is already taken");
    } else if (this.state.profileEmail === "test") {
      // NEED CHECK WITH DATABASE
      event.preventDefault();
      this.handleProfileInvalidPopup("Email is already taken");
    } else if (!emailRegex.test(this.state.profileEmail)) {
      event.preventDefault();
      this.handleProfileInvalidPopup("Email is invalid");
    } else if (this.state.profilePassword.length < 8) {
      event.preventDefault();
      this.handleProfileInvalidPopup("Password is too short :\\");
    } else {
      event.preventDefault();
      console.log(this.state);
      this.handleProfileInvalidPopup("Done ! :)");
    }
  };

  render() {
    return (
      <>
        <div className="profile__wrapper">
          <Link to="/main" className="profile__back-btn">
            <span>Back</span>
          </Link>
          <div className="profile__page">
            <h1>Your profile</h1>
            <div className="profile__inside-wrapper">
              <div>Change username</div>
              <input onChange={this.handleLoginChange}></input>
              <div>Change e-mail</div>
              <input type="email" onChange={this.handleEmailChange}></input>
              <div>Change password</div>
              <input type="password" onChange={this.handlePasswordChange}></input>
              <br></br>
              <input type="submit" className="profile__submit-btn" onClick={this.handleSubmit}></input>
              <p style={this.state.profileInvalidPopup ? { display: "block" } : { display: "none" }}>
                {this.state.profileWarningMassage}
              </p>
            </div>

            <Link to="/signin">
              <button className="profile__del-btn">Delete account</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;
