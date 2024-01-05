import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "./redux/slices/goodsSlice";
import { addBasket, removeBasket } from "./redux/slices/basketSlice";
import { handlerModal } from "./redux/slices/modalSlice";

import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Modal from "./components/Modal";
import Button from "./components/Button";

import "./App.scss";

export default function App() {
    const currentCard = useSelector((state) => state.basket.currentCard);
    const isModalAdd = useSelector((state) => state.modal.isModalAdd);
    const isModalDel = useSelector((state) => state.modal.isModalDel);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(fetchGoods());
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <Header />
            <AppRoutes />
            {(isModalAdd || isModalDel) && (
                <Modal
                    header={
                        isModalAdd
                            ? "Додавання товару в кошик"
                            : "Видалення товару з кошика"
                    }
                    closeButton
                    closeModal={() =>
                        isModalAdd
                            ? dispatch(handlerModal("isModalAdd"))
                            : dispatch(handlerModal("isModalDel"))
                    }
                    text={isModalAdd ? "Додати?" : "Видалити?"}
                    actions={
                        <>
                            <Button
                                backgroundColor={"green"}
                                text={"Так"}
                                onClick={() => {
                                    if (isModalAdd) {
                                        dispatch(addBasket(currentCard));
                                        dispatch(handlerModal("isModalAdd"));
                                    } else {
                                        dispatch(removeBasket(currentCard));
                                        dispatch(handlerModal("isModalDel"));
                                    }
                                }}
                            />
                            <Button
                                backgroundColor={"red"}
                                text={"Ні"}
                                onClick={() =>
                                    isModalAdd
                                        ? dispatch(handlerModal("isModalAdd"))
                                        : dispatch(handlerModal("isModalDel"))
                                }
                            />
                        </>
                    }
                />
            )}
        </>
    );
}
