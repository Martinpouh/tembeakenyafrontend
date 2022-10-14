import React, { useState } from "react";

function AddSchedule({ addSchedule, flightId }) {

    const [scheduleObj, setScheduleObj] = useState({
        name: "",
        description: "",
        date: "",
        start_time: "",
        duration: 0,
        cost: 0,
        location: "",
        flight_id: flightId
    })

    function handleInput(event) {
        setScheduleObj({
            ...scheduleObj,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        addSchedule(scheduleObj);
        setScheduleObj({
            name: "",
            description: "",
            date: "",
            start_time: "",
            duration: 0,
            cost: 0,
            location: "",
            flight_id: flightId
        })
    }

    return (
        <form className="row g-3" onSubmit={handleSubmit} style={{maxWidth: 940, margin: "auto"}} >
            <h2>Add A New Schedule</h2>
            <div className="col-md-4">
                <label htmlFor="inputEmail4" className="form-label">Activity Name</label>
                <input type="text" className="form-control" name="name" value={scheduleObj.name} onChange={handleInput}/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputPassword4" className="form-label">Date</label>
                <input type="date" className="form-control" name="date" value={scheduleObj.date} onChange={handleInput}/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputPassword4" className="form-label">Time</label>
                <input type="time" className="form-control" name="start_time" value={scheduleObj.start_time} onChange={handleInput}/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Description</label>
                <input type="text" className="form-control" name="description" value={scheduleObj.description} onChange={handleInput}/>
            </div>
            <div className="col-4">
                <label htmlFor="inputAddress2" className="form-label">Duration (hours)</label>
                <input type="text" className="form-control" placeholder="Please round" name="duration" value={scheduleObj.duration} onChange={handleInput}/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputCity" className="form-label">Location</label>
                <input type="text" className="form-control" name="location" value={scheduleObj.location} onChange={handleInput}/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputCity" className="form-label">Cost</label>
                <input type="text" className="form-control" name="cost" placeholder="Please round to the nearest dollar" value={scheduleObj.cost} onChange={handleInput}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-success">Save</button>
            </div>
        </form>
    )
}

export default AddSchedule;