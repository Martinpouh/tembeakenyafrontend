import React from "react";
import FlightCard from "./FlightCard";

function FlightsBooked({ flightsBookedArr }) {
    
    return (
        <div>
            {flightsBookedArr.map(flight => {
                return (
                    <FlightCard key={flight.id} flight={flight} />
                )
            })}
        </div>
    )
}

export default FlightsBooked;