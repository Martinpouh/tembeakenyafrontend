import React, { useState } from "react";

function TravelCard({ userFlight, editStay, editTravel }) {

    const [isEditFormTravel, setIsEditFormTravel] = useState(false)
    const [isEditFormStay, setIsEditFormStay] = useState(false)
    const [editUserFlightObj, setEditUserFlightObj] = useState({
        method_of_transportation: userFlight.method_of_transportation,
        transportation_cost: userFlight.transportation_cost,
        stay: userFlight.stay,
        stay_cost: userFlight.stay_cost,
        user_id: userFlight.user_id,
        flight_id: userFlight.flight_id,
        id: userFlight.id
    })

    function handleInput(event) {
        setEditUserFlightObj({
            ...editUserFlightObj,
            [event.target.name]: event.target.value
        })
    }

    function handleSaveTravel(event) {
        event.preventDefault()
        editTravel(editUserFlightObj)
        setIsEditFormTravel(!isEditFormTravel)
    }

    function handleSaveStay(event) {
        event.preventDefault()
        editStay(editUserFlightObj)
        setIsEditFormStay(!isEditFormStay)
    }

    function handleShowTravelEditForm() {
        if (!isEditFormTravel) {
            return (
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Travel Information</h5>
                            <p className="card-text">Method of Travel: {editUserFlightObj.method_of_transportation}</p>
                            <p className="card-text">Travel Cost: ${editUserFlightObj.transportation_cost}</p>
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
                            <p className="card-text">Method of Travel: <input type="text" name="method_of_transportation" value={editUserFlightObj.method_of_transportation} onChange={handleInput}/></p>
                            <p className="card-text">Travel Cost: $<input type="text" name="transportation_cost" value={editUserFlightObj.transportation_cost} onChange={handleInput}/></p>
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
                            {isEditFormStay ? <p className="card-text">Accommodation Type: <input type="text" name="stay" value={editUserFlightObj.stay} onChange={handleInput}/></p> :  <p className="card-text">Accommodation Type: {editUserFlightObj.stay}</p>}
                            {isEditFormStay ? <p className="card-text">Stay Cost: $<input type="text" name="stay_cost" value={editUserFlightObj.stay_cost} onChange={handleInput}/></p> : <p className="card-text">Stay Cost: ${editUserFlightObj.stay_cost}</p>}
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
    //                     <p className="card-text">Accommodation Type: {editUserFlightObj.stay}</p>
    //                     <p className="card-text">Stay Cost: ${editUserFlightObj.stay_cost}</p>
    //                     <button type="button" className="btn btn-secondary" onClick={() => setIsEditFormStay(!isEditFormStay)}>Edit</button>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div className="card-body">
    //                 <h5 className="card-title">Stay Information</h5>
    //                 <p className="card-text">Accommodation Type: <input type="text" name="stay" value={editUserFlightObj.stay} onChange={handleInput}/></p>
    //                 <p className="card-text">Stay Cost: $<input type="text" name="stay_cost" value={editUserFlightObj.stay_cost} onChange={handleInput}/></p>
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