import React from "react";
import logo from "./videoplayback-1.mp4";
import Poster from "./dark knight rises.jpg";
import classes from "./landing.module.css";

const landing = (props) => {
  return (
    <div className={classes.showcase}>
      {/* <img className={classes.img}src={logo} alt="Logo" />  */}
      <video className={classes.img} autoPlay loop muted poster={Poster}>
        <source src={logo} type="video/mp4" />
        <div className={classes.fadebottom} />
      </video>
      <div className={classes.fadebottom} />
    </div>
  );
};
export default landing;
