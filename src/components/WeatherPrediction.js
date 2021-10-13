import React from 'react'
import Snow from '../assets/images/LightRain.png'

const WeatherPrediction = ({ day }) => {
    return (
        <div className="weather-prediction">
            <p>{day}</p>
            <img src={Snow} alt="sure" />
            <p>
                <span>16*C</span>
                <span style={{color: 'grey', marginLeft: 20}}>11*C</span>
            </p>
        </div>
    )
}

export default WeatherPrediction;
