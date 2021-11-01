import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/car.png";

export class Start extends Component {
  render() {
    return (
      <>
        {/* NAVBAR */}
        <div className="start__nav">
          <span className="start__name">
            lux-moto<img src={logo} className="start__logo" alt="logo"></img>
          </span>
          <Link to="/signin" className="start__signin">
            <span>Sgin in</span>
          </Link>
        </div>

        {/* FIRST MESSAGE */}
        <h1 className="start__first-quote">PERFORMANCE, LUXURY, ADRENALIN</h1>

        {/* PIC OF ROAD AND CAR */}
        <div className="start__car-img"></div>

        {/* SECOND MESSAGE */}
        <h1 className="start__sec-quote">ONLY TOP SHELF </h1>

        {/* MID SECTION WITH VIDEO */}
        <div className="start__mid-section">
          {/* LEFT SECTION */}
          <div className="start__left-desc">
            <div className="start__left-title">Years of experience</div>
            <hr></hr>
            <p className="start__left-p">
              Years in the industry have allowed our company to see customer needs that our competitors are unable to
              provide. We approach each one individually, our team is able to meet the highest expectations, starting
              from simple modifications to such things as wrapping or tuning.{" "}
            </p>
          </div>

          {/* VIDEO */}
          <div className="start__mid-desc">
            <iframe
              className="start__mid-video"
              width="866px"
              height="487.13px"
              src="https://www.youtube.com/embed/r5LF2kgu8mg?controls=0&autoplay=1&mute=1&playlist=r5LF2kgu8mg&loop=1&amp;start=8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          {/* RIGHT SECTION */}
          <div className="start__right-desc">
            <div className="start__right-title">Straight from supplier</div>
            <hr></hr>
            <p className="start__right-p">
              We have been cooperating with brands such as Mercedes, Lamborghini, Yamaha or Kawasaki. Every year we are
              provided with the latest models of the most expensive brands in the world. Long-term cooperation brings
              benefits primarily to our customers who regularly appreciate our offer.{" "}
            </p>
          </div>
        </div>

        {/* THIRD MESSAGE */}
        <h1 className="start__third-quote">DON'T HESITATE TO REACH FOR THE SKY</h1>

        {/* MOTORCYCLE PIC */}
        <div className="start__moto-img"></div>

        {/* FOOTER  */}
        <div className="start__footer">
          <h1 className="start__credits">
            Shout-out to :{" "}
            <a href="https://www.youtube.com/watch?v=r5LF2kgu8mg">2Scratch - FROZEN / AMG & Lamborghini | LIMMA</a> by{" "}
            <a href="https://www.youtube.com/channel/UCCeAaS4K5IOr3n6KUZvN9zA">GANGSTER GANG</a> for great video and to{" "}
            <a href="https://www.pexels.com/">Pexels</a> for great free images !
          </h1>
        </div>
      </>
    );
  }
}

export default Start;
