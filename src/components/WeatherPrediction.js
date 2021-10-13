import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
// images
import Shower from '../assets/images/Shower.png'
import Clear from '../assets/images/Clear.png'
import HeavyCloud from '../assets/images/HeavyCloud.png'
import HeavyRain from '../assets/images/HeavyRain.png'
import LightCloud from '../assets/images/LightCloud.png'
import LightRain from '../assets/images/LightRain.png'
import convert from '../util/convert'

const WeatherPrediction = ({ day, weatherStateName, max_temp, min_temp }) => {
    const [{ maxTemp, minTemp }, setTemp] = useState({
        maxTemp: 0,
        minTemp: 0
    })
    const { unit } = useSelector(state => state.weather)

    useEffect(() => {
        const degreeNum = () => {
            const d1 = convert(Math.round(max_temp), unit)
            const d2 = convert(Math.round(min_temp), unit)
            setTemp({ maxTemp: d1, minTemp: d2})
        }
        degreeNum()
    }, [unit, min_temp, max_temp])


    const weatherImg = (currentWeatherState) => {
        switch(currentWeatherState){
            case 'Clear':
                return Clear;
            case 'Light Cloud':
                return LightCloud;
            case 'Light Rain':
                return LightRain;
            case 'Heavy Rain':
                return HeavyRain;
            case 'Heavy Cloud':
                return HeavyCloud;
            case 'Shower':
                return Shower;
            default:
                return Clear;
        }
    }

    return (
        <div className="weather-prediction">
            <p>{day}</p>
            <img src={weatherImg(weatherStateName)} alt="sure" />
            <p>
                <span>{maxTemp}°C</span>
                <span style={{color: 'grey', marginLeft: 20}}>{minTemp}°{unit}</span>
            </p>
        </div>
    )
}

export default WeatherPrediction;
