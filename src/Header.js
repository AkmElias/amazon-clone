import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShopingBascketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ bascket, user }] = useStateValue([]);
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLine1">
              Hello {user && user.email}
            </span>
            <span className="header__optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/home" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Returns</span>
            <span className="header__optionLine2">& Orders</span>
          </div>
        </Link>
        <Link to="/home" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Your</span>
            <span className="header__optionLine2">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header__link">
        <div className="header__optionBascket">
          <ShopingBascketIcon className="header__optionLine2" />
          <span className="header__bascketCount"> {bascket?.length} </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
