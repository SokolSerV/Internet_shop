import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basketList: JSON.parse(localStorage.getItem("basket")) || [],
    currentCard: {},
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        offerCard: (state, action) => {
            state.currentCard = action.payload;
        },

        addBasket: (state, action) => {
            const isBasket = state.basketList.some(
                (elem) => elem.id === action.payload.id
            );
            if (!isBasket) {
                state.basketList.push(action.payload);
                // state.basketList = [...state.basketList, action.payload];
            }
            state.currentCard = {};

            localStorage.setItem("basket", JSON.stringify(state.basketList));
        },

        removeBasket: (state, action) => {
            state.basketList = state.basketList.filter(
                (elem) => elem.id !== action.payload.id
            );
            state.currentCard = {};

            if (state.basketList.length) {
                localStorage.setItem(
                    "basket",
                    JSON.stringify(state.basketList)
                );
            } else {
                localStorage.removeItem("basket");
            }
        },

        deleteBasket: (state, action) => {
            state.basketList = [];
            localStorage.removeItem("basket");
        },
    },
});

export const { offerCard, addBasket, removeBasket, deleteBasket } =
    basketSlice.actions;
export default basketSlice.reducer;
