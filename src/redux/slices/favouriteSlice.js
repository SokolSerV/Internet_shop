import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteList: JSON.parse(localStorage.getItem("favourite")) || [],
};

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            const isFavourite = state.favouriteList.some(
                (elem) => elem.id === action.payload.id
            );
            if (!isFavourite) {
                state.favouriteList.push(action.payload);
                // state.favouriteList = [...state.favouriteList, action.payload];
            }

            localStorage.setItem(
                "favourite",
                JSON.stringify(state.favouriteList)
            );
        },
        removeFavourite: (state, action) => {
            state.favouriteList = state.favouriteList.filter(
                (elem) => elem.id !== action.payload.id
            );

            if (state.favouriteList.length) {
                localStorage.setItem(
                    "favourite",
                    JSON.stringify(state.favouriteList)
                );
            } else {
                localStorage.removeItem("favourite");
            }
        },
    },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
