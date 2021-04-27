import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Landing from "./pages/landing";
import Balance from "./pages/balance";
import Stake from "./pages/stake";

class App extends Component {
    render() {
        return(
            <Switch>
                <Route path="/balance" component={Balance} />
                <Route path="/stake" component={Stake} />
                <Route path="/" component={Landing} />
            </Switch>
        );
    }
}

export default App;