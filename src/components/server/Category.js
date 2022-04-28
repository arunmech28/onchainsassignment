import React, { useState } from "react";

import Channel from "./Channel";

const Category = ({ category, channelList }) => {
    const [visible, setVisible] = useState(true);

    return (
        <div className="category">
            <div
                className="category-header"
                onClick={() => setVisible(!visible)}
            >
                <i
                    className={`header-icon pi ${
                        visible ? "pi-chevron-down" : "pi-chevron-right"
                    }`}
                />

                {category}
            </div>
            <div className={`channel-list`}>
                {channelList &&
                    channelList.map((node) => {
                        return <Channel channel={node} visible={visible} />;
                    })}
            </div>
        </div>
    );
};

export default Category;
