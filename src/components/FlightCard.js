import React from "react";
import { Link } from "react-router-dom";

function FlightCard({ flight }) {

    return (
        <div className="card mb-3" style={{maxWidth: 940}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={flight.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{flight.name}</h5>
                        <p className="card-text">{flight.description}</p>
                        <p className="card-text"><small className="text-muted">Creator: {flight.creator}</small></p>
                        <Link to={`flights/${flight.id}`}><button type="button" className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightCard;