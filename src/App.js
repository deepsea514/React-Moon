import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Landing from "./pages/landing";
import Balance from "./pages/balance";
import Stake from "./pages/stake";
import Loader from "./components/loader";
import Footer from "./components/footer";

class App extends Component {
    render() {
        return (
            <>
                {/* <Loader /> */}

                <BrowserRouter basename="">
                    <Switch>
                        <Route path="/balance" component={Balance} />
                        <Route path="/stake" component={Stake} />
                        <Route path="/" component={Landing} />

                    </Switch>
                </BrowserRouter>

                <Footer />
            </>
        );
    }
}

export default App;