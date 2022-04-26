import React, { Fragment } from "react";
import {
    getServerDetail,
    setSelectedChannel,
} from "pages/Servers/serversSlice";
import { useDispatch, useSelector } from "react-redux";

import Channel from "./Channel";
import { Hashtag } from "utils/images";
import { Link } from "react-router-dom";
import { PanelMenu } from "primereact/panelmenu";
import { useHistory } from "react-router-dom";

const CategoryList = () => {
    const serverDetail = useSelector(getServerDetail);
    const history = useHistory();
    const dispatch = useDispatch();

    const channelList = serverDetail !== "Home" && [...serverDetail.channels];

    const onClickEvent = (event, onClick, item) => {
        history.replace(`channels/${serverDetail.id}/${item.id}`);
        dispatch(setSelectedChannel(item));
        onClick(event);
    };

    const getItems = () => {
        let items = [];
        serverDetail !== "Home" &&
            serverDetail.categoryList.forEach((category) => {
                items.push({
                    label: category,
                    expanded: true,
                    items: channelList
                        .filter((channel) => channel.category == category)
                        .map((node) => {
                            return {
                                label: node.name,
                                icon: "pi pi-volume-up",
                                expanded: true,
                                template: (item, options) => {
                                    return (
                                        <Link
                                            to={`/channels/${serverDetail.id}/${node.id}`}
                                            className={options.className}
                                            target={item.target}
                                            // onClick={options.onClick}
                                            // onClick={(e) => {
                                            //     onClickEvent(
                                            //         e,
                                            //         options.onClick,
                                            //         node
                                            //     );
                                            // }}
                                        >
                                            <span
                                                class={`p-menuitem-icon ${
                                                    node.type == "voice" &&
                                                    "pi pi-volume-up"
                                                }`}
                                            >
                                                {node.type == "text" && (
                                                    <img
                                                        className="p-menuitem-icon hashtag-icon"
                                                        src={Hashtag}
                                                        alt="p-menuitem-icon"
                                                    />
                                                )}
                                            </span>
                                            <span
                                                className={`${options.labelClassName} submenu-item-text`}
                                            >
                                                {item.label}
                                            </span>
                                        </Link>
                                    );
                                },
                            };
                        }),
                });
            });
        return items;
    };

    return (
        <div className="categoryList">
            {
                serverDetail && <PanelMenu model={getItems()} multiple={true} />
                // <Fragment>
                //     <div className="category-header">{category}</div>
                //     <ul className="channel-list">
                //         {channelList
                //             .filter(
                //                 (channel) =>
                //                     channel.category == category
                //             )
                //             .map((node) => {
                //                 return <Channel name={node.name} />;
                //             })}
                //     </ul>
                // </Fragment>
            }
        </div>
    );
};

export default CategoryList;
