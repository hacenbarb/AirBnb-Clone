import React from "react"
import photoGrid from "../images/photo-grid.png"

export default function Hero() {
    return(
        <div className="hero container">
            <div className="hero__media">
                <img src={photoGrid} alt="photo grid" className="photo-grid"/>
            </div>
            <div className="hero__content">
                <h1>Online Experiences</h1>
                <p className="hero__content__text">Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}