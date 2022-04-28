import "./Navbar.scss";

import React, { useEffect, useState } from "react";

import { Menu } from "primereact/menu";
import { getServerList } from "./navbar.service";
import { setServerDetails } from "pages/Servers/serversSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const [items, setItems] = useState([]);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        setItems(getServerList());
        if (location.pathname == "/channels/@me") {
            dispatch(setServerDetails("Home"));
        }
    }, []);

    return (
        <div className="Navbar">
            <Menu model={items} />
        </div>
    );
};

export default Navbar;
