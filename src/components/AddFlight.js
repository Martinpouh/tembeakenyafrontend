import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddFlight({ postNewFlight, errorMessages }) {

    const [ newFlight, setNewFlight ] = useState({
        name: "",
        location: "",
        description: "",
        start_date: "",
        end_date: "",
        image: "",
        budget: 0
    })

    const history = useHistory()

    function handleInput(event) {
        setNewFlight({
            ...newFlight,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        postNewFlight(newFlight);
        history.push("/flightsbooked")
    }

    return (
        <div class="container-fluid" style={{margin: "auto"}}>
            <form onSubmit={handleSubmit} style={{margin: "auto"}}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name of Flight
                        <input type="text" className="form-control" name="name" value={newFlight.name} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Location
                        <input type="text" className="form-control" name="location" value={newFlight.location} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Description
                        <input type="text" className="form-control" name="description" value={newFlight.description} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Start Date
                        <input type="date" className="form-control" name="start_date" value={newFlight.start_date} onChange={handleInput}/>
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">End Date
                        <input type="date" className="form-control" name="end_date" value={newFlight.end_date} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Image
                        <input type="text" className="form-control" name="image" value={newFlight.image} onChange={handleInput} />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Budget
                        <input type="text" className="form-control" name="budget" value={newFlight.budget} onChange={handleInput} />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            { errorMessages.length > 0 ? errorMessages.map(error => <p>{error}</p>) : null }
        </div>
    )
}

export default AddFlight;