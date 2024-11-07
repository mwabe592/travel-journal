import React from "react";
import pin from "../assets/pin.png";

export default function (props) {
  return (
    <section className="card">
      <img
        src={props.imageUrl}
        alt="picture of the place"
        className="card-image"
      />
      <div className="location-info">
        <div className="info-header">
          <div className="location-pin">
            <img src={pin} alt="pin icon for location" className="pin" />
            <p className="location">{props.location}</p>{" "}
            {/* need to capitalise */}
          </div>
          <a
            href={props.googleMapsUrl}
            target="_blank"
            className="location-link"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{props.title}</h2>
        <p className="dates">
          <span className="date">{props.startDate}</span>-{" "}
          <span className="date">{props.endDate}</span>
        </p>
        <p className="description">{props.description}</p>
      </div>
    </section>
  );
}
