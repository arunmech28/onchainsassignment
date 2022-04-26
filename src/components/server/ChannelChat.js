import React, { Fragment, useEffect, useState } from "react";

import { Hashtag } from "utils/images";
import { InputText } from "primereact/inputtext";
import Pusher from "pusher-js";
import axios from "axios";
import { getSelectedChannel } from "pages/Servers/serversSlice";
import { getUsername } from "pages/Login/loginSlice";
import { useSelector } from "react-redux";

const ChannelChat = () => {
    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState(null);
    const username = useSelector(getUsername);
    const selectedChannel = useSelector(getSelectedChannel);
    // const pusher = new Pusher({
    //     appId: "1400635",
    //     key: "61a2b9cf3efcc637be74",
    //     secret: "db727fc561d83332c6b9",
    //     cluster: "ap2",
    // });

    // useEffect(() => {
    //     loadData();
    // }, []);

    // const loadData = () => {
    //     const channel = pusher.subscribe("onchains-assignment-arun");
    //     channel.bind("message", (data) => {
    //         setAllMessages(data);
    //         console.log(data);
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            username,
            message,
        };
        // channel.trigger("message", payload);
        // axios.post("https://localhost:5000/message", payload).then((res) => {
        //     loadData();
        //     console.log(res);
        // });
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
            <div className="chat-content"></div>
            <div className="chat-message-input">
                <form onSubmit={handleSubmit} className="input-message-form">
                    <div className="field">
                        <span className="p-input-icon-left">
                            <i className="pi pi-plus-circle add-icon" />
                            <InputText
                                autoComplete="off"
                                id="text-input"
                                name="text-input"
                                className="block"
                                value={message}
                                onChange={onChangeHandler}
                            />
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChannelChat;
