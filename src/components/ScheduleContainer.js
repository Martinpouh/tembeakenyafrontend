import React from "react";
import ScheduleCard from "./ScheduleCard";

function ScheduleContainer({ schedulesArray, isEditable, editSchedule, deleteSchedule }) {
    return(
    <div class="container-fluid" style={{margin: "auto"}}>
        {schedulesArray.map(schedule => <ScheduleCard key={schedule.id} schedule={schedule} isEditable={isEditable} editSchedule={editSchedule} deleteSchedule={deleteSchedule} />)}
    </div>
    )
}

export default ScheduleContainer;