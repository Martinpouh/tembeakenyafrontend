import React, { useState } from "react";

function TravelCard({ passengerFlight, editStay, editTravel }) {

    const [isEditFormTravel, setIsEditFormTravel] = useState(false)
    const [isEditFormStay, setIsEditFormStay] = useState(false)
    const [editPassengerFlightObj, setEditPassengerFlightObj] = useState({
        method_of_transportation: passengerFlight.method_of_transportation,
        transportation_cost: passengerFlight.transportation_cost,
        stay: passengerFlight.stay,
        stay_cost: passengerFlight.stay_cost,
        passenger_id: passengerFlight.passenger_id,
        flight_id: passengerFlight.flight_id,
        id: passengerFlight.id
    })

    function handleInput(event) {
        setEditPassengerFlightObj({
            ...editPassengerFlightObj,
            [event.target.name]: event.target.value
        })
    }

    function handleSaveTravel(event) {
        event.preventDefault()
        editTravel(editPassengerFlightObj)
        setIsEditFormTravel(!isEditFormTravel)
    }

    function handleSaveStay(event) {
        event.preventDefault()
        editStay(editPassengerFlightObj)
        setIsEditFormStay(!isEditFormStay)
    }

    function handleShowTravelEditForm() {
        if (!isEditFormTravel) {
            return (
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Travel Information</h5>
                            <p className="card-text">Method of Travel: {editPassengerFlightObj.method_of_transportation}</p>
                            <p className="card-text">Travel Cost: ${editPassengerFlightObj.transportation_cost}</p>
                            <button type="button" className="btn btn-secondary" onClick={() => setIsEditFormTravel(!isEditFormTravel)}>Edit</button>
                        </div>
                    </div>
                </div>
            )   
        } else {
            return (
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Travel Information</h5>
                            <p className="card-text">Method of Travel: <input type="text" name="method_of_transportation" value={editPassengerFlightObj.method_of_transportation} onChange={handleInput}/></p>
                            <p className="card-text">Travel Cost: $<input type="text" name="transportation_cost" value={editPassengerFlightObj.transportation_cost} onChange={handleInput}/></p>
                            <button type="button" className="btn btn-secondary" onClick={handleSaveTravel}>Save</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function handleShowStayEditForm() {
            return (
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Stay Information</h5>
                            {isEditFormStay ? <p className="card-text">Accommodation Type: <input type="text" name="stay" value={editPassengerFlightObj.stay} onChange={handleInput}/></p> :  <p className="card-text">Accommodation Type: {editPassengerFlightObj.stay}</p>}
                            {isEditFormStay ? <p className="card-text">Stay Cost: $<input type="text" name="stay_cost" value={editPassengerFlightObj.stay_cost} onChange={handleInput}/></p> : <p className="card-text">Stay Cost: ${editPassengerFlightObj.stay_cost}</p>}
                            {isEditFormStay ? <button type="button" className="btn btn-secondary" onClick={handleSaveStay}>Save</button> : <button type="button" className="btn btn-secondary" onClick={() => setIsEditFormStay(!isEditFormStay)}>Edit</button>}
                        </div>
                    </div>
                </div>
            )
    }

    // function handleShowStayEditForm() {
    //     if (!isEditFormStay) {
    //         return (
    //             <div className="card-body">
    //                     <h5 className="card-title">Stay Information</h5>
    //                     <p className="card-text">Accommodation Type: {editPassengerFlightObj.stay}</p>
    //                     <p className="card-text">Stay Cost: ${editPassengerFlightObj.stay_cost}</p>
    //                     <button type="button" className="btn btn-secondary" onClick={() => setIsEditFormStay(!isEditFormStay)}>Edit</button>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div className="card-body">
    //                 <h5 className="card-title">Stay Information</h5>
    //                 <p className="card-text">Accommodation Type: <input type="text" name="stay" value={editPassengerFlightObj.stay} onChange={handleInput}/></p>
    //                 <p className="card-text">Stay Cost: $<input type="text" name="stay_cost" value={editPassengerFlightObj.stay_cost} onChange={handleInput}/></p>
    //                 <button type="button" className="btn btn-secondary" onClick={handleSaveStay}>Save</button>
    //             </div>
    //         )
    //     }
    // }

    return (
        <div className="row">
            {handleShowTravelEditForm()}
            {handleShowStayEditForm()}
        </div>
    )
}

export default TravelCard;