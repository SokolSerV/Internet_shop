import { useSelector } from "react-redux";

import Navigation from "../Navigation";

import { ReactComponent as Logo } from "./icons/logo.svg";
import { ReactComponent as FavouriteIcon } from "./icons/favourite.svg";
import { ReactComponent as BasketIcon } from "./icons/basket.svg";

import "./Header.scss";

export default function Header() {
    const favouriteCounter = useSelector(
        (state) => state.favourite.favouriteList.length
    );

    const basketCounter = useSelector(
        (state) => state.basket.basketList.length
    );

    return (
        <header className="header">
            <div className="header_wrapper">
                <span className="header_logo">
                    <Logo />
                </span>
                <p className="header_title">Сторінка інтернет-магазину</p>
                <Navigation />
                <div className="header_icons">
                    <span className="favorites">
                        <FavouriteIcon />
                        <span className="counter">{favouriteCounter}</span>
                    </span>
                    <span className="basket">
                        <BasketIcon />
                        <span className="counter">{basketCounter}</span>
                    </span>
                </div>
            </div>
        </header>
    );
}
