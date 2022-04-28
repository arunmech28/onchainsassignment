import "./Message.scss";

import React from "react";
import moment from "moment";
import useImage from "customhooks/useImage";

const Message = ({ messageText, content, isProfileIncluded }) => {
    const { loading, error, image } = useImage("PraveenKumar.jpeg");

    return (
        <div className="Message">
            <div className="profile-icon">
                {isProfileIncluded && (
                    <img
                        src={image}
                        alt="profile-photo"
                        className="profile-photo"
                    />
                )}
            </div>
            <div className="message-group">
                {isProfileIncluded && (
                    <div className="message-detail">
                        <div className="user-info">{content.username}</div>
                        <div className="time-info">
                            {moment(content.createdAt).format(
                                "DD-MM-YYYY HH:mm:ss"
                            )}
                        </div>
                    </div>
                )}

                <div className="message-text">{messageText}</div>
            </div>
        </div>
    );
};

export default Message;
