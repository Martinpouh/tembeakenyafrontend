import React from "react"
import { Link } from "react-router-dom";

function Header({ handleLogout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/flights">Tembea Kenya</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/flights" className="nav-link" aria-current="page">Kenyan Flights</Link>
                    <Link to="/flightsbooked" className="nav-link" aria-current="page">My Flights</Link>
                    <Link to="/addflight" className="nav-link" aria-current="page">Add Flight</Link>
                    {/* <Link to="/logout" className="nav-link" aria-current="page" >Logout</Link> */}
                    <button type="button" className="btn btn-link" onClick={handleLogout}>Logout</button>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;