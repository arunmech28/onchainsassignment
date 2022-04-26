import "./Home.scss";

import ConversationListBlock from "../../components/home/ConversationListBlock";
import DefaultLayout from "../../components/DefaultLayout";
import IndividualInfo from "../../components/home/IndividualInfo";
import React from "react";

const Home = () => {
    return (
        <div className="Home">
            <ConversationListBlock />
            <IndividualInfo />
        </div>
    );
};

export default Home;
