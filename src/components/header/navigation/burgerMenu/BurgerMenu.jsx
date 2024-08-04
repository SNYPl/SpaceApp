import React from "react";
import "./burgerMenu.scss";
import { CartSvg, HoveredCart, CloseSvg } from "../../../../common/svg/header";
import logo from "../../../../asset/images/header/LOGO.svg";
import { Link, NavLink } from "react-router-dom";

const BurgerMenu = ({ burgerMenu, burgerMenuHandler }) => {
  return (
    <section className={`burger ${burgerMenu ? "showBurgerMenu" : ""}`}>
      <div className="burger--container">
        <div className="burger--close--icon" onClick={burgerMenuHandler}>
          <CloseSvg />
        </div>
        <Link to="/" className="burger--logo--link">
          <img src={logo} alt="logo" className="burger--logo" />
        </Link>
        <div className="burger--menu">
          <div className="burger--nav">
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
      </div>
    </section>
  );
};

export default BurgerMenu;
