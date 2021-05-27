import React from "react";
import "./style.scss";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div className="menuTitle">Menu</div>
      <div>
        <ul className="menuList">
          <li>
            <i className="fas fa-home"></i>Home
          </li>
          <li>
            <i className="fas fa-laptop-house"></i>Community
          </li>
          <li>
            <i className="fas fa-clock"></i>Coming Soon
          </li>
          <li>
            <i className="fas fa-user-circle"></i>Account
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
