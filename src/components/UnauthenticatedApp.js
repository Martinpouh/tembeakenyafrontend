import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Login";

function UnauthenticatedApp({ setCurrentUser }) {
    return (
        <>
            <div>Not signed in!</div>
            <Switch>
                <Route exact path="/">
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>
        </>
    )
}

export default UnauthenticatedApp;