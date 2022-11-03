import React, { Component } from "react";
import AppImage from "../../img/app.png";
import PlayStoreImage from "../../img/get_from_playstore.png";
import { BrowserRouter, Routes } from "react-router-dom";

import "./screen.css";
export class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <ContentLeft />
        <ContentRight />
      </div>
    );
  }
}

const ContentLeft = () => {
  return (
    <div className="content-left">
      <h1>One-Stop</h1>
      <h1>App For</h1>
      <h3>BIT Lalpur</h3>
      <h3>Students</h3>
      <h6>Contains all tools needed for BIT Lalpur Student</h6>
      <img
        src={PlayStoreImage}
        onClick={() => { window.open(
                           "https://play.google.com/store/apps/details?id=com.atech.bit"
                         );} }
      />
    </div>
  );
};

const ContentRight = () => {
  return (
    <div className="content-right">
      <img src={AppImage}
       />
    </div>
  );
};

export default Screen;
