import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import ServerMenu from "components/ServerMenu";

const getLabelName = (serverName) => {
    return serverName
        .split(" ")
        .map((node) => node.charAt(0))
        .join("");
};

export const getServerList = () => {
    let list = [];

    list.push({
        template: (item, options) => {
            return (
                <Link to="/channels">
                    <ServerMenu isHome={true} />
                </Link>
            );
        },
    });

    const servers = [
        {
            name: "arunmech server 1",
            id: 1212222,
            categoryList: ["TEXT CHANNELS", "VOICE CHANNELS"],
            channels: [
                {
                    name: "test channel1",
                    type: "text",
                    category: "TEXT CHANNELS",
                    id: 12122221,
                },
                {
                    name: "test channel2",
                    type: "voice",
                    category: "VOICE CHANNELS",
                    id: 12122222,
                },
            ],
        },
        {
            name: "arunmech server 2",
            id: 1212223,
            categoryList: ["TEXT CHANNELS", "VOICE CHANNELS"],
            channels: [
                {
                    name: "test channel3",
                    type: "text",
                    category: "TEXT CHANNELS",
                    id: 12122231,
                },
                {
                    name: "test channel4",
                    type: "voice",
                    category: "VOICE CHANNELS",
                    id: 12122232,
                },
            ],
        },
    ];

    servers.forEach((server) => {
        list.push({
            template: (item, options) => {
                return (
                    <Link to="/channels">
                        <ServerMenu server={server} />
                        {/* <Button
                            label={getLabelName(server.name)}
                            className="nav-button"
                            onClick={() => {
                                onServerClick(server);
                            }}
                        ></Button> */}
                    </Link>
                );
            },
        });
    });

    return list;
};
