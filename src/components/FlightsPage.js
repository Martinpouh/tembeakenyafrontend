import React from "react";
import FlightCard from "./FlightCard";

function FlightsPage({ flightsArr }) {

    return (
        <div>
            {flightsArr.map(flight => {
                return (
                    <FlightCard key={flight.id} flight={flight} />
                )
            })}
        </div>
    )
}

export default FlightsPage;