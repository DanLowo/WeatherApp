import React from 'react'
import '../assets/css/WeatherDetails.css'
import Icon from './Icon'

const WeatherDetails = ({ degree, type, date, location }) => {
    return (
        <div id="weather-details">
            <h1 id="weather-degree">
                {degree}
                <span id="weather-degree-symbol">oC</span>
            </h1>
            <h3 className="weather-type">{type}</h3>
            <p className="current-date">
                {date}
            </p>
            
            <p>
                <Icon name="location_on" />
                <span className="current-location">
                    {location}
                </span>
            </p>
        </div>
    )
}

export default WeatherDetails
