import "./Navbar.scss";

import React, { useEffect, useState } from "react";

import { Menu } from "primereact/menu";
import { getServerList } from "./navbar.service";
import { setCurrentSelectedServer } from "./navbarSlice";
import { setServerDetails } from "pages/Servers/serversSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
    const [items, setItems] = useState([]);

    // const dispatch = useDispatch();

    // const onServerClick = (server) => {
    //     dispatch(setServerDetails(server));
    // };

    useEffect(() => {
        setItems(getServerList());
    }, []);

    return (
        <div className="Navbar">
            <Menu model={items} />
        </div>
    );
};

export default Navbar;
