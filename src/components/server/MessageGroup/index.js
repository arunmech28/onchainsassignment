import "./MessageGroup.scss";

import React, { Fragment } from "react";

import Message from "components/Message";
import Tooltip from "./Tooltip";

const MessageGroup = ({ content }) => {
    return (
        <li className="li-message">
            <Tooltip />
            <Fragment>
                {content.message.split("\\n").map((node, index) => {
                    if (index == 0) {
                        return (
                            <Message
                                content={content}
                                messageText={node}
                                isProfileIncluded={true}
                            />
                        );
                    } else {
                        return (
                            <Message
                                content={content}
                                messageText={node}
                                isProfileIncluded={false}
                            />
                        );
                    }
                })}
            </Fragment>
        </li>
    );
};

export default MessageGroup;
