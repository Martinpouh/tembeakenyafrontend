import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Login";

function UnauthenticatedApp({ setCurrentPassenger }) {
    return (
        <>
            <div>Not signed in!</div>
            <Switch>
                <Route exact path="/">
                    <Login setCurrentPassenger={setCurrentPassenger} />
                </Route>
            </Switch>
        </>
    )
}

export default UnauthenticatedApp;