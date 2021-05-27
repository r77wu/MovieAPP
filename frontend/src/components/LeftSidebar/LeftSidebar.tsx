import React from "react";
import "./style.scss";

import logo from "../../assets/logo.png";
import Menu from "./Menu/Menu";

const LeftSidebar: React.FC = () => {
  return (
    <div className="leftSidebar">
      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
      <Menu />
    </div>
  );
};

export default LeftSidebar;
