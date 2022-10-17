import React, { useEffect, useState } from "react";

function ScheduleCard({ schedule, isEditable, deleteSchedule, editSchedule }) {

    const [currentUserSchedulesArr, setCurrentUserSchedulesArr] = useState([])
    const [isEditForm, setIsEditForm] = useState(false)
    const [editScheduleObj, setEditScheduleObj] = useState({
        name: schedule.name,
        description: schedule.description,
        date: schedule.date,
        start_time: schedule.start_time,
        duration: schedule.duration,
        cost: schedule.cost,
        flight_id: schedule.flight_id,
        location: schedule.location,
        id: schedule.id
    })

    useEffect(() => {
        fetch("/user_schedules")
        .then(resp => resp.json())
        .then(userSchedulesArr => setCurrentUserSchedulesArr(userSchedulesArr))
    }, [])

    function handleInput(event) {
        setEditScheduleObj({
            ...editScheduleObj,
            [event.target.name]: event.target.value
        })
    }

    function handleSaveEdit(event) {
        event.preventDefault();
        editSchedule(editScheduleObj);
        setIsEditForm(!isEditForm);
    }

    function handleDelete() {
        deleteSchedule(schedule.id)
    }

    function handleShowEditForm() {
        if (!isEditForm) {
            return (
                <div className="card-body">
                    <h5 className="card-title">{schedule.name} - {schedule.location}</h5>
                    <p className="card-text">{schedule.date} at {schedule.start_time}</p>
                    <p className="card-text">{schedule.description}</p>
                    <p className="card-text">${schedule.cost}</p>
                    {currentUserSchedulesArr.find(userSchedule => userSchedule.schedule_id === schedule.id) ? <button type="button" className="btn btn-success">Going</button> : <button type="button" className="btn btn-dark">Not Going</button>}
                    <p></p>
                    {isEditable ? <button type="button" className="btn btn-secondary" onClick={() => setIsEditForm(!isEditForm)}>Edit Activity</button> : null}
                    <span>             </span>
                    {isEditable ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Activity</button> : null}
                </div>
            )
        } else {
            return (
                <div className="card-body">
                    <h5 className="card-title"><input type="text" name="name" value={editScheduleObj.name} onChange={handleInput}/> - <input type="text" name="location" value={editScheduleObj.location} onChange={handleInput}/></h5>
                    <p className="card-text"><input type="text" name="date" value={editScheduleObj.date} onChange={handleInput}/> at <input type="text" name="start_time" value={editScheduleObj.start_time} onChange={handleInput}/></p>
                    <p className="card-text"><input type="text" name="description" value={editScheduleObj.description} onChange={handleInput}/></p>
                    <p className="card-text">$<input type="text" name="cost" value={editScheduleObj.cost} onChange={handleInput}/></p>
                    {currentUserSchedulesArr.find(userSchedule => userSchedule.schedule_id === schedule.id) ? <button type="button" className="btn btn-success">Going</button> : <button type="button" className="btn btn-dark">Not Going</button>}
                    <p></p>
                    {isEditable ? <button type="button" className="btn btn-secondary" onClick={handleSaveEdit}>Save Activity</button> : null}
                    <span>             </span>
                    {isEditable ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Activity</button> : null}
                </div>
            )
        }
    }

    return (
        <div className="card mb-3" style={{maxWidth: 940, margin: "auto"}}>
            {handleShowEditForm()}
        </div>
    )
}

export default ScheduleCard;