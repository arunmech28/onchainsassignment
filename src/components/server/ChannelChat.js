import React, { Fragment, useEffect, useState } from "react";
import { getSelectedChannel, updateMessages } from "pages/Servers/serversSlice";
import { useDispatch, useSelector } from "react-redux";

import ChatContent from "./ChatContent";
import { Hashtag } from "utils/images";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { getUsername } from "pages/Login/loginSlice";

const ChannelChat = () => {
    const [message, setMessage] = useState("");
    const username = useSelector(getUsername);
    const selectedChannel = useSelector(getSelectedChannel);

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            username,
            message,
        };
        axios
            .post("http://localhost:5001/message/send", payload, {
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Methods":
                        "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                },
            })
            .then((res) => {
                if (res.status == 200) {
                    setMessage("");
                }
            });
    };

    const onChangeHandler = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="channel-chat">
            <div className="chat-header">
                {selectedChannel && (
                    <Fragment>
                        <img
                            className="hashtag-icon"
                            src={Hashtag}
                            alt="hashtag-icon"
                        />
                        <h1>{selectedChannel}</h1>
                    </Fragment>
                )}
            </div>
            <ChatContent />
            <div className="chat-message-input">
                <form
                    method="post"
                    onSubmit={handleSubmit}
                    className="input-message-form"
                >
                    <div className="field">
                        <div className="p-input-icon-left">
                            <i className="pi pi-plus-circle add-icon" />
                            <InputText
                                autoComplete="off"
                                id="text-input"
                                name="text-input"
                                className="block"
                                value={message}
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChannelChat;
