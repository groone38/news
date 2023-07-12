import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      NotFound page pleas go to{" "}
      <Link to="/" style={{ color: "black" }}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
