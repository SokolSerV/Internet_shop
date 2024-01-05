import PropTypes from "prop-types";
import { useContext } from "react";
import cn from "classnames";

import GoodsCard from "../GoodsCard";
import ViewContext from "../../../context/ViewContext";

import "./GoodsList.scss";

export default function GoodsList({ items, btnAddBasket, btnDeleteBasket }) {
    const { view } = useContext(ViewContext);

    const arrayItems = items.map((card) => {
        return (
            <GoodsCard
                key={card.id}
                card={card}
                btnAddBasket={btnAddBasket}
                btnDeleteBasket={btnDeleteBasket}
            />
        );
    });

    return (
        <div className={cn("goods_wrapper", { table: view === "table" })}>
            {arrayItems}
        </div>
    );
}

GoodsList.propTypes = {
    items: PropTypes.array,
    btnAddBasket: PropTypes.bool,
    btnDeleteBasket: PropTypes.bool,
};
GoodsList.defaultProps = {
    items: [],
    btnAddBasket: false,
    btnDeleteBasket: false,
};
