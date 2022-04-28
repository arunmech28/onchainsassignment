import "./Servers.scss";

import React, { useEffect } from "react";
import {
    getServerDetail,
    setSelectedChannel,
    setServerDetails,
} from "./serversSlice";
import { useDispatch, useSelector } from "react-redux";

import CategoryList from "components/server/CategoryList";
import ChannelChat from "components/server/ChannelChat";
import ServerName from "components/server/ServerName";
import { getServer } from "components/Navbar/navbar.service";
import { useParams } from "react-router-dom";

const Servers = () => {
    const dispatch = useDispatch();
    const { serverId, channelId } = useParams();
    const serverDetail = useSelector(getServerDetail);

    useEffect(() => {
        if (channelId && serverId && serverDetail) {
            dispatch(
                setSelectedChannel(
                    serverDetail.channels.find((node) => node.id == channelId)
                        .name
                )
            );
        } else if (channelId && serverId && !serverDetail) {
            const server = getServer(serverId);
            dispatch(setServerDetails(server));
            dispatch(
                setSelectedChannel(
                    server.channels.find((node) => node.id == channelId).name
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
