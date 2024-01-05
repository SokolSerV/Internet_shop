import { shallowEqual, useSelector } from "react-redux";

import GoodsList from "../../components/Goods/GoodsList";
import CheckoutForm from "../../components/forms/CheckoutForm/CheckoutForm";

export default function PageBasket() {
    const currentBasket = useSelector(
        (state) => state.basket.basketList,
        shallowEqual
    );
    if (currentBasket.length === 0) {
        return (
            <h3 style={{ display: "flex", justifyContent: "center" }}>
                Кошик порожній
            </h3>
        );
    } else {
        return (
            <div style={{ display: "flex" }}>
                <GoodsList items={currentBasket} btnDeleteBasket />
                <CheckoutForm />
            </div>
        );
    }
}
