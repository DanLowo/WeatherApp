import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Icon from './Icon'
import WeatherDetails from './WeatherDetails'
import moment from 'moment'

// images
import Shower from '../assets/images/Shower.png'
import Clear from '../assets/images/Clear.png'
import HeavyCloud from '../assets/images/HeavyCloud.png'
import HeavyRain from '../assets/images/HeavyRain.png'
import LightCloud from '../assets/images/LightCloud.png'
import LightRain from '../assets/images/LightRain.png'

import { getWeather } from '../store/weather'


const CurrentWeather = ({ openSearch }) => {
    const dispatch = useDispatch()

    const { today, state } = useSelector(state => state.weather)

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
        <div id="currentWeather">
            <section className="search-section">
                <button className="search-btn" onClick={openSearch}>Search for places</button>
                <button style={{backgroundColor: 'transparent', border: 0}} onClick={() => dispatch(getWeather())}><Icon name="gps_fixed" background /></button>
            </section>
            <section className="weather-image">
                <img src={weatherImg(today.weather_state_name)} alt="Sun in the background and cloud raining" />
            </section>
            <WeatherDetails degree={today.the_temp} type={today.weather_state_name} date={`Today. ${moment().format("ddd D MMM")}`} location={state} />
        </div>
    )
}

export default CurrentWeather
