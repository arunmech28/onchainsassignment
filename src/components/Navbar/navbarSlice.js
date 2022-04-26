const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    serverList: [],
};

const NavbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setServerList: (state, action) => {
            state.serverList = action.payload;
        },
        setCurrentSelectedServer: (state, action) => {
            state.currentSelectedServer = action.payload;
        },
    },
});

const { actions } = NavbarSlice;

export const { setServerList, setCurrentSelectedServer } = actions;

export default NavbarSlice.reducer;
