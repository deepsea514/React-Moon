import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Landing from "./pages/landing";
import Balance from "./pages/balance";
import Stake from "./pages/stake";
import Header from "./components/header";
import Loader from "./components/loader";
import Footer from "./components/footer";

class App extends Component {
    render() {
        return (
            <BrowserRouter basename="">
                <Switch>
                    {/* <Loader /> */}
                    <Header />

                    <Route path="/balance" component={Balance} />
                    <Route path="/stake" component={Stake} />
                    <Route path="/" component={Landing} />

                    <Footer />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;