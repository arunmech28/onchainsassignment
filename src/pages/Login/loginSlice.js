const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    username: "",
};

const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
    },
});

const { actions } = LoginSlice;

export const { setUsername } = actions;

export const getUsername = (state) => state.login.username;

export default LoginSlice.reducer;
