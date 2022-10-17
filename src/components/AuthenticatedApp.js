import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import AddFlight from "./AddFlight";
import Header from "./Header";
import FlightDetailPage from "./FlightDetailPage";
import FlightsBooked from "./FlightsBooked";
import FlightsPage from "./FlightsPage";

function AuthenticatedApp({ currentUser, setCurrentUser }) {

    const [flightsArr, setFlightsArr] = useState([])
    const [flightsBookedArr, setFlightsBookedArr] = useState([])
    const [isAddedFlight, setIsAddedFlight] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch("/flights")
        .then(resp => resp.json())
        .then(flightData => setFlightsArr(flightData))
    }, [isAddedFlight, isDeleted])

    useEffect(() => {
        fetch("/flightsbooked")
        .then(resp => resp.json())
        .then(flights => setFlightsBookedArr(flights))
    }, [isAddedFlight, isDeleted])

    function postNewFlight(newflight) {
        fetch("/flights", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newflight)
        })
        .then(resp => {
           if (resp.ok) {
                resp.json().then(addedFlight => {
                    setFlightsArr([...flightsArr, addedFlight])
                    setIsAddedFlight(!isAddedFlight)
                    setErrorMessages([])
                })
           } else {
               resp.json().then(errors => {
                   setErrorMessages(errors.errors)
               })
           }
        })
    }

    function deleteFlight(deleteId) {
        fetch(`/flights/${deleteId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeleted(!isDeleted))
    }

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(resp => {
            if (resp.ok) {
                setCurrentUser(null)
                history.push("/")
            }
        })
    }

    return (
        <>
        <Header handleLogout={handleLogout}/>
            <Switch>
                <Route path="/flights/:id">
                    <FlightDetailPage deleteFlight={deleteFlight} currentUser={currentUser}/>
                </Route>
                <Route path="/flightsbooked">
                    <FlightsBooked flightsBookedArr={flightsBookedArr}/>
                </Route>
                <Route path="/flights">
                    <FlightsPage flightsArr={flightsArr}/>
                </Route>
                <Route path="/addflight">
                    <AddFlight postNewFlight={postNewFlight} errorMessages={errorMessages}/>
                </Route>
            </Switch>
        </>
    )
}

export default AuthenticatedApp;