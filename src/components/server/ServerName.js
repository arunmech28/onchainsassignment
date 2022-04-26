import Pusher from "pusher-js";
import React from "react";
import { getServerDetail } from "pages/Servers/serversSlice";
import { useSelector } from "react-redux";

const ServerName = () => {
    const serverDetail = useSelector(getServerDetail);

    return (
        serverDetail && (
            <div className="server-name">
                <h1>{serverDetail.name}</h1>
            </div>
        )
    );
};

export default ServerName;
