import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from "./slices/goodsSlice";
import favouriteSlice from "./slices/favouriteSlice";
import basketSlice from "./slices/basketSlice";
import modalSlice from "./slices/modalSlice";

const store = configureStore({
    reducer: {
        goods: goodsSlice,
        favourite: favouriteSlice,
        basket: basketSlice,
        modal: modalSlice,
    },
});

export default store;
