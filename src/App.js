import "./App.css";

import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Routes from "components/Routes";

function App() {
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
