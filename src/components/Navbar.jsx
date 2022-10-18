import React from "react"
import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <div className="navbar container">
            <img src={airbnbLogo} alt="airbnb"  height={32} />
        </div>
    )
} 