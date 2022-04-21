import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        view: "Home"
    },
    reducers: {
        setViewName: (state, action) => {
            state.view = action.payload;
        },
    },
});

export const {setViewName} = appSlice.actions;

export const selectViewName = (state) => state.app.view;

export default appSlice.reducer;