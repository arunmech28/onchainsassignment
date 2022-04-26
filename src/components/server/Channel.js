import React from "react";

const Channel = ({ data: { name } }) => {
    const onclickHandler = () => {};

    return (
        <li className="channel-name" onClick={onclickHandler}>
            {name}
        </li>
    );
};

export default Channel;
