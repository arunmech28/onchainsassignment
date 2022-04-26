import "./Servers.scss";

import React, { useEffect, useState } from "react";
import { getServerDetail, setSelectedChannel } from "./serversSlice";
import { useDispatch, useSelector } from "react-redux";

import CategoryList from "components/server/CategoryList";
import ChannelChat from "components/server/ChannelChat";
import ServerName from "components/server/ServerName";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Servers = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { serverId, channelId } = useParams();
    const serverDetail = useSelector(getServerDetail);

    useEffect(() => {
        if (channelId && serverId && serverDetail != "Home") {
            console.log(serverDetail.channels);
            console.log(channelId);
            dispatch(
                setSelectedChannel(
                    serverDetail.channels.find((node) => node.id == channelId)
                        .name
                )
            );
        }
    }, [serverId, channelId]);

    return (
        <div className="Servers">
            <div className="channel-list-block">
                <ServerName />
                <CategoryList />
            </div>
            {serverId && channelId && <ChannelChat />}
        </div>
    );
};

export default Servers;
