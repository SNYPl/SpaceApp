import React, { useState } from "react";
import "./navigation.scss";
import logo from "../../../asset/images/header/LOGO.svg";
import {
  BurgerMenuSvg,
  CartSvg,
  HoveredCart,
} from "../../../common/svg/header";
import { Link, NavLink } from "react-router-dom";
import BurgeerMenu from "./burgerMenu/BurgerMenu";

const Navigation = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerMenuHandler = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <section className="navigation">
      <BurgeerMenu
        burgerMenu={burgerMenu}
        burgerMenuHandler={burgerMenuHandler}
      />
      <Link to="/" className="navigation--logo--link">
        <img src={logo} alt="logo" className="navigation--logo" />
      </Link>
      <div className="navigation--menu">
        <div className="navigation--menu--image" onClick={burgerMenuHandler}>
          <BurgerMenuSvg />
        </div>
        <div className="nav">
          <ul className="nav--list">
            <li className="nav--list--item">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav--list--item">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="nav--list--item nav--cart">
              <NavLink to="/cart">
                <CartSvg className="cart--default" />
                <HoveredCart className="cart--hovered" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
