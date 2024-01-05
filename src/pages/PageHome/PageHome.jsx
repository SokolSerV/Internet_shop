import { shallowEqual, useSelector } from "react-redux";
import { useState } from "react";

import GoodsList from "../../components/Goods/GoodsList";
import ViewContext from "../../context/ViewContext";
import ToggleView from "../../components/ToggleView/ToggleView";

export default function PageHome() {
    const [view, setView] = useState("card");

    const toggleView = () => {
        setView((prev) => (prev === "card" ? "table" : "card"));
    };

    const value = { view, toggleView };

    const goods = useSelector((state) => state.goods.goodsList, shallowEqual);

    return (
        <ViewContext.Provider value={value}>
            <ToggleView />
            <GoodsList items={goods} btnAddBasket />
        </ViewContext.Provider>
    );
}
