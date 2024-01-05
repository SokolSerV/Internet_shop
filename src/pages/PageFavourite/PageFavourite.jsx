import { shallowEqual, useSelector } from "react-redux";

import GoodsList from "../../components/Goods/GoodsList";

export default function PageFavourite() {
    const currentFavourite = useSelector(
        (state) => state.favourite.favouriteList,
        shallowEqual
    );
    if (currentFavourite.length === 0) {
        return (
            <h3 style={{ display: "flex", justifyContent: "center" }}>
                Немає вибраних
            </h3>
        );
    } else {
        return <GoodsList items={currentFavourite} btnAddBasket />;
    }
}
