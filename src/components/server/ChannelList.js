import Channel from "./Channel";
import React from "react";

const ChannelList = ({ channelList }) => {
    const getChannel = (channel) => {
        return <li>{channel.name}</li>;
    };
    return (
        <ul>
            {channelList.map((node) => {
                return <Channel data={node} />;
            })}
        </ul>
    );
};

export default ChannelList;
