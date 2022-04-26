import "./DefaultLayout.scss";

import React, { useEffect, useState } from "react";

import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";

const DefaultLayout = ({ children }) => {
    const location = useLocation();
    const [isLoginPage, setIsLoginPage] = useState(false);

    useEffect(() => {
        if (location.pathname === "/login") {
            setIsLoginPage(true);
        } else {
            setIsLoginPage(false);
        }
    }, [location]);

    return (
        <div className="DefaultLayout">
            {!isLoginPage && (
                <header className="main-header">
                    <Navbar />
                </header>
            )}
            <main className="main-content">{children}</main>
        </div>
    );
};

export default DefaultLayout;
