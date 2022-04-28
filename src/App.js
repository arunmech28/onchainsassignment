import "./App.scss";

import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Routes from "components/Routes";
import { setUsername } from "pages/Login/loginSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!!sessionStorage.getItem("username")) {
            dispatch(setUsername());
        }
    }, []);

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route component={Routes} />
            </Switch>
        </div>
    );
}

export default App;
