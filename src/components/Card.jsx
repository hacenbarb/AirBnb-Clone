import React from "react"
import img from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(props) {
  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
      <div className="card">
        <div className="card__media">

        {badgeText && <div className="status">{badgeText}</div>}
          <img src={`/src/images/${props.coverImg}`} alt="katie zaferes" />
        </div>
        <div className="card__content">
          <div className="card__content__rating">
            <img src={star} alt="rating" width={16}/>
            <span className="rating">{props.stats.rating}</span>
            <span className="rating-count">{props.stats.ratingCount}</span>
            <span className="rating-location">{props.location}</span>

          </div>
          <p className="title">{props.title}</p>
          <p className="price"><span>from ${props.price}</span> / person</p>
        </div>
      </div>
    ) 
}