import React from 'react'
import ShowerImg from '../assets/images/Shower.png'
import BackgroundImg from '../assets/images/Cloud-background.png'
import Icon from './Icon'
import WeatherDetails from './WeatherDetails'

const CurrentWeather = ({ openSearch }) => {
    return (
        <div id="currentWeather">
            <section className="search-section">
                <button className="search-btn" onClick={openSearch}>Search for places</button>
                <Icon name="gps_fixed" background />
            </section>
            <section className="weather-image">
            <img src={BackgroundImg} alt="Sun in the background and cloud raining" />
                <img src={ShowerImg} alt="Sun in the background and cloud raining" />
            </section>
            <WeatherDetails degree="15" type="Shower" date="Today . Fri, 5 Jun" location="Lagos" />
        </div>
    )
}

export default CurrentWeather
