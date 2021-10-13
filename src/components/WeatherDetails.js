import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../assets/css/WeatherDetails.css'
import convert from '../util/convert'
import Icon from './Icon'

const WeatherDetails = ({ degree, type, date, location }) => {
    const [temp, setTemp] = useState(0)
    const { unit } = useSelector(state => state.weather)

    useEffect(() => {
        const degreeNum = () => {
            const ok = convert(Math.round(degree), unit)
            setTemp(ok)
        }
        degreeNum()
    }, [unit, degree])

    return (
        <div id="weather-details">
            <h1 id="weather-degree">
                {temp}
                <span id="weather-degree-symbol">o{unit}</span>
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
