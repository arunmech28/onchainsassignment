import "./ServerMenu.scss";

import React, { useState } from "react";
import { getServerDetail, setServerDetails } from "pages/Servers/serversSlice";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "primereact/button";

const ServerMenu = ({ server, isHome }) => {
    const dispatch = useDispatch();
    const serverDetail = useSelector(getServerDetail);

    const getLabelName = (serverName) => {
        return serverName
            .split(" ")
            .map((node) => node.charAt(0))
            .join("");
    };

    const onServerClick = () => {
        if (isHome) {
            dispatch(setServerDetails("Home"));
        } else {
            dispatch(setServerDetails(server));
        }
    };

    return isHome ? (
        <Button
            icon="pi pi-discord"
            className={`nav-button ${
                isHome && serverDetail == "Home" ? "highlight-menu-button" : ""
            }`}
            onClick={onServerClick}
        />
    ) : (
        <Button
            label={getLabelName(server.name)}
            className={`nav-button ${
                serverDetail && serverDetail.name == server.name
                    ? "highlight-menu-button"
                    : ""
            }`}
            onClick={onServerClick}
        ></Button>
    );
};

export default ServerMenu;
