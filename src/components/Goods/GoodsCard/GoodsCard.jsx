import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import {
    addFavourite,
    removeFavourite,
} from "../../../redux/slices/favouriteSlice";
import { offerCard } from "../../../redux/slices/basketSlice";
import { handlerModal } from "../../../redux/slices/modalSlice";

import Button from "../../Button";
import ViewContext from "../../../context/ViewContext";

import { ReactComponent as SelectIcon } from "./icons/select.svg";
import { ReactComponent as DeleteIcon } from "./icons/skullCrossbones.svg";

import "./GoodsCard.scss";

export default function GoodsCard({ card, btnAddBasket, btnDeleteBasket }) {
    const { view } = useContext(ViewContext);

    const favouriteList = useSelector(
        (state) => state.favourite.favouriteList,
        shallowEqual
    );
    const basketList = useSelector(
        (state) => state.basket.basketList,
        shallowEqual
    );
    const dispatch = useDispatch();

    const [isFavourite, setIsFavourite] = useState(false);
    const [isBasket, setIsBasket] = useState(false);

    useEffect(() => {
        setIsFavourite(favouriteList.some((elem) => elem.id === card.id));
        setIsBasket(basketList.some((elem) => elem.id === card.id));
    }, [favouriteList, basketList, card.id]);

    const { name, price, image, article, color, id } = card;

    return (
        <div className={cn("card", { table: view === "table" })} id={id}>
            <img
                className="card_img"
                src={image}
                alt={name}
                width="250"
                height="250"
            />
            <h4 className="card_title">{name}</h4>
            <p className="card_article">Артикул: {article}</p>
            <p className="card_color">Колір - {color}</p>
            <p className="card_price">Ціна - {price} грн.</p>
            <div className={cn("card_actions", { table: view === "table" })}>
                <span
                    className={
                        isFavourite ? "card_selected--active" : "card_selected"
                    }
                    onClick={() => {
                        setIsFavourite(!isFavourite);
                        if (isFavourite) {
                            dispatch(removeFavourite(card));
                        } else {
                            dispatch(addFavourite(card));
                        }
                    }}
                >
                    <SelectIcon />
                </span>
                {btnAddBasket && (
                    <Button
                        backgroundColor={isBasket ? "grey" : "blue"}
                        text={isBasket ? "Товар у кошику" : "Додати в кошик"}
                        onClick={() => {
                            dispatch(handlerModal("isModalAdd"));
                            dispatch(offerCard(card));
                        }}
                        isDisabled={isBasket}
                    />
                )}
                {btnDeleteBasket && (
                    <span
                        className={"card_selected"}
                        onClick={() => {
                            dispatch(handlerModal("isModalDel"));
                            dispatch(offerCard(card));
                        }}
                    >
                        <DeleteIcon />
                    </span>
                )}
            </div>
        </div>
    );
}

GoodsCard.propTypes = {
    card: PropTypes.object,
    btnAddBasket: PropTypes.bool,
    btnDeleteBasket: PropTypes.bool,
};
GoodsCard.defaultProps = {
    card: {},
    btnAddBasket: false,
    btnDeleteBasket: false,
};
