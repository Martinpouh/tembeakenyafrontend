import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddActivity from "./AddSchedule";
import ScheduleContainer from "./ScheduleContainer";
import TravelCard from "./TravelCard";
import { useHistory } from "react-router-dom";

function FlightDetailPage({ deleteFlight, currentUser }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [flightObj, setFlightObj] = useState({
        name: "",
        description: "",
        creator: "",
        location: "",
        start_date: "",
        end_date: "",
        image: "",
        budget: 0,
        users: [],
        user_flight: {}
    })
    const [isEditable, setIsEditable] = useState(false)
    const [schedulesArray, setSchedulesArray] = useState([])
    const [isScheduleAdded, setIsScheduleAdded] = useState(false)
    const [isScheduleEdited, setIsScheduleEdited] = useState(false)
    const [isScheduleDeleted, setIsScheduleDeleted] = useState(false)
    const [isEditedTravel, setIsEditedTravel] = useState(false)
    const [isEditedStay, setIsEditedStay] = useState(false)

    const flightId = useParams().id

    const history = useHistory()

    useEffect(() => {
        fetch(`/flights/${flightId}`)
        .then(resp => resp.json())
        .then(flightData => {
            setFlightObj(flightData)
            setSchedulesArray(flightData.schedules)
            setIsLoaded(!isLoaded)
            checkIfUserCanEdit(flightData.users)
        })
    }, [isScheduleDeleted, isScheduleAdded, isScheduleEdited, isEditedTravel, isEditedStay])

    function handleDelete() {
        deleteFlight(flightId)
        history.push("/flightsbooked")
    }

    function checkIfUserCanEdit(flightUsers) {
        if (flightUsers.find(user => user.id === currentUser.id)) {
            setIsEditable(true)
        }
    }

    function addSchedule(newSchedule) {
        fetch("/schedules", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newSchedule)
        })
        .then(resp => resp.json())
        .then(data => {
            setSchedulesArray([...schedulesArray, newSchedule])
            setIsScheduleAdded(!isScheduleAdded)
        })
    }

    function editSchedule(editedSchedule) {
        fetch(`/schedules/${editedSchedule.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(editedSchedule)
        })
        .then(resp => resp.json())
        .then(data => {
            setIsScheduleEdited(!isScheduleEdited)
        })
    }

    function deleteSchedule(scheduleId) {
        fetch(`/schedules/${scheduleId}`, {
            method: "DELETE"
        })
        .then(data => setIsScheduleDeleted(!isScheduleDeleted))
    }

    function editTravel(editedTravel) {
        fetch(`/user_flights/${editedTravel.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(editedTravel)
        })
        .then(resp => resp.json())
        .then(date => setIsEditedTravel(!isEditedTravel))
    }

    function editStay(editedStay) {
        fetch(`/user_flights/${editedStay.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(editedStay)
        })
        .then(resp => resp.json())
        .then(date => setIsEditedStay(!isEditedStay))
    }

    return (
        <div >
            <div className="card mb-3" >
                <img src={flightObj.image} className="img-fluid" alt="..." style={{maxHeight: 400}}></img>
                <div className="card-body">
                    <h2 className="card-title"> {flightObj.name} </h2>
                    <p className="card-text">Location: {flightObj.location}</p>
                    <p className="card-text">Description: {flightObj.description}</p>
                    <p className="card-text">Creator: {flightObj.creator}</p>
                    <p className="card-text">{flightObj.start_date}</p>
                    <p className="card-text">Budget: ${flightObj.budget}</p>   
                    {isEditable ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Flight</button> : null }
                </div>
            </div>
            {isEditable ? <TravelCard userFlight={flightObj.user_flight} editTravel={editTravel} editStay={editStay}/> : null}
            <p/>
            <h2 style={{margin: "auto"}}>Flight Schedules</h2>
            <p/>
            {/* <button type="button" className="btn btn-success">Add Activity</button> */}
            <ScheduleContainer schedulesArray={schedulesArray} isEditable={isEditable} editSchedule={editSchedule} deleteSchedule={deleteSchedule} />
            <AddActivity id="add-schedule-form" addSchedule={addSchedule} flightId={flightId}/>
        </div>
    )
}


export default FlightDetailPage;