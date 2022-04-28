import React, { useEffect, useState } from "react";

import MessageGroup from "./MessageGroup";
import Pusher from "pusher-js";

const ChatContent = () => {
    const [messages, setMessages] = useState([]);
    const pusher = new Pusher("8f7d59faf071e5d4232a", {
      cluster: "ap2",
     });

    useEffect(() => {
         const channel = pusher.subscribe("onchains-assignment-arun");
         channel.bind("messages", (data) => {
             const { username, message } = data;
             setMessages((prevState) => [...prevState, { username, message }]);
         });

         return () => {
            pusher.unsubscribe("onchains-assignment-arun");
        };
    }, []);

    return (
        <div className="chat-content">
            <ol className="message-order">
                {messages.map((content) => {
                    return <MessageGroup content={content} />;
                })}
            </ol>
        </div>
    );
};

export default ChatContent;
