import React, { Fragment } from "react";
import {
    getSelectedChannel,
    getServerDetail,
} from "pages/Servers/serversSlice";

import { Hashtag } from "utils/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Channel = ({ channel, visible }) => {
    const serverDetail = useSelector(getServerDetail);
    const selectedChannel = useSelector(getSelectedChannel);

    return (
        <Link
            className={`channel ${
                selectedChannel == channel.name ? "highlight" : ""
            } ${visible ? "" : "hidden"}`}
            to={`/channels/${serverDetail.id}/${channel.id}`}
        >
            <Fragment>
                {channel.type == "text" && (
                    <img
                        className="p-menuitem-icon hashtag-icon"
                        src={Hashtag}
                        alt="p-menuitem-icon"
                    />
                )}
                {channel.type == "voice" && (
                    <i className="p-menuitem-icon pi pi-volume-up" />
                )}
                <div className="channel-name">{channel.name}</div>
            </Fragment>
        </Link>
    );
};

export default Channel;
