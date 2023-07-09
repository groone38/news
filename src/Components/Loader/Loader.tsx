import React from "react";
import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className={classes.lds_ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
