import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goodsList: [],
};

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        setGoods: (state, action) => {
            state.goodsList = action.payload;
        },
    },
});

export const { setGoods } = goodsSlice.actions;

export const fetchGoods = () => {
    return async (dispatch) => {
        const data = await fetch("http://localhost:3000/goods.json").then(
            (resp) => resp.json()
        );
        dispatch(setGoods(data));
    };
};

export default goodsSlice.reducer;
