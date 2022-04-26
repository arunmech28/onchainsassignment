import { Route, Switch } from "react-router-dom";

import DefaultLayout from "components/DefaultLayout";
import Home from "pages/Home";
import React from "react";
import Servers from "pages/Servers";

const Routes = () => {
    return (
        <DefaultLayout>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/channels" component={Servers} />
                <Route
                    exact
                    path="/channels/:serverId/:channelId"
                    component={Servers}
                />
            </Switch>
        </DefaultLayout>
    );
};

export default Routes;
