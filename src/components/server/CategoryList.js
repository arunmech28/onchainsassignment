import Category from "./Category";
import React from "react";
import { getServerDetail } from "pages/Servers/serversSlice";
import { useSelector } from "react-redux";

const CategoryList = () => {
    const serverDetail = useSelector(getServerDetail);

    const channelList = serverDetail !== "Home" &&
        serverDetail &&
        serverDetail.channels && [...serverDetail.channels];

    return (
        <div className="categoryList">
            {serverDetail !== "Home" &&
                serverDetail &&
                serverDetail.categoryList &&
                serverDetail.categoryList.map((node) => {
                    const channels = channelList.filter(
                        (channel) => channel.category == node
                    );
                    return <Category category={node} channelList={channels} />;
                })}
        </div>
    );
};

export default CategoryList;
