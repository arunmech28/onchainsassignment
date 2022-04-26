import { configureStore } from "@reduxjs/toolkit";
import login from "pages/Login/loginSlice";
import navbar from "components/Navbar/navbarSlice";
import servers from "pages/Servers/serversSlice";

const store = configureStore({
    reducer: {
        servers,
        navbar,
        login,
    },
});

export default store;
