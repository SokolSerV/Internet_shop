import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

import "./Navigation.scss";

export default function Navigation() {
    const location = useLocation();
    const { pathname } = location;
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li className="nav_item">
                    <Link
                        to="/Internet_shop/"
                        className={cn("nav_link", { active: pathname === "/" })}
                    >
                        Головна сторінка
                    </Link>
                </li>
                <li className="nav_item">
                    <Link
                        to="/Internet_shop/favourite"
                        className={cn("nav_link", {
                            active: pathname === "/favourite",
                        })}
                    >
                        Вибране
                    </Link>
                </li>
                <li className="nav_item">
                    <Link
                        to="/Internet_shop/basket"
                        className={cn("nav_link", {
                            active: pathname === "/basket",
                        })}
                    >
                        Кошик
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
