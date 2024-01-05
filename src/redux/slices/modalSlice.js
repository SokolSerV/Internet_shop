import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalAdd: false,
    isModalDel: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        handlerModal: (state, action) => {
            const modalType = action.payload;

            if (modalType === "isModalAdd" || modalType === "isModalDel") {
                state[modalType] = !state[modalType];
            }
        },
    },
});

export const { handlerModal } = modalSlice.actions;
export default modalSlice.reducer;
