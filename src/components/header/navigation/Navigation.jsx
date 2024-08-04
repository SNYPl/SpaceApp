import React from "react";
import "./navigation.scss";
import logo from "../../../asset/images/header/LOGO.svg";
import {
  BurgerMenuSvg,
  CartSvg,
  HoveredCart,
} from "../../../common/svg/header";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="navigation">
      <img src={logo} alt="logo" className="navigation--logo" />
      <div className="navigation--menu">
        <div className="navigation--menu--image">
          <BurgerMenuSvg />
        </div>
        <div className="nav">
          <ul className="nav--list">
            <li className="nav--list--item">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav--list--item">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav--list--item nav--cart">
              <Link to="/cart">
                <CartSvg className="cart--default" />
                <HoveredCart className="cart--hovered" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
