import "./Login.scss";

import React, { useState } from "react";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Redirect } from "react-router-dom";
import { setUsername } from "./loginSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onClickHandler = () => {
        dispatch(setUsername(formData.email));
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <Redirect to="/home"></Redirect>;
    }

    return (
        <Card
            className="Login"
            style={{ width: "25rem", margin: "10rem 25rem" }}
        >
            <form
                className="login-form"
                autoComplete="nope"
                method="post"
                onSubmit={onClickHandler}
            >
                <div className="header">
                    <h3>Welcome back!</h3>
                    <div className="back-message">
                        We're so excited to see you again!
                    </div>
                </div>
                <div className="content">
                    <div className="field">
                        <label htmlFor="email">EMAIL OR PHONE NUMBER</label>
                        <InputText
                            autoComplete="off"
                            id="email"
                            name="email"
                            className="block"
                            value={formData.email}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">PASSWORD</label>
                        <InputText
                            autoComplete="off"
                            id="password"
                            name="password"
                            className="block"
                            value={formData.password}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="field">
                        <Button
                            className="block login-btn"
                            label="Login"
                            // onClick={onClickHandler}
                            type="submit"
                        ></Button>
                    </div>
                </div>
            </form>
            <div className="qr-login-form"></div>
        </Card>
    );
};

export default Login;
