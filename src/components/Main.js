import React from 'react'
import '../assets/css/Main.css'
import Converter from './Converter'
import Icon from './Icon'
import WeatherPrediction from './WeatherPrediction'

const Main = () => {

    const styles = {
        percentage: {
            alignSelf: 'end',
            paddingRight: 58,
            color: '#c2bcbc'
        }
    }

    const WindStatus = () => (
        <div className="section-box">
            <h1>Wind status</h1>
            <h3> <span>7</span>mph</h3>
            <h5>
                <span><Icon name="send" background/></span>
                <span>WSW</span>
            </h5>
        </div>
    )

    const Humidity = () => (
        <div className="section-box">
            <h1>Humidity</h1>
            <h3> <span>84</span>%</h3>
            <div id="measurement">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div id="bar">
                <p />
            </div>
            <div style={styles.percentage}>%</div>
        </div>
    )

    const Visibility = () => (
        <div className="section-box">
            <h1>Visibility</h1>
            <h3> <span>6,4</span> miles</h3>
            <p></p>
        </div>
    )

    const AirPressure = () => (
        <div className="section-box">
            <h1>Air Pressure</h1>
            <h3> <span>998</span> mb</h3>
            <p></p>
        </div>
    )

    return (
        <div id="main">
            <section id="body">
            <section >
                <Converter />
            </section>
            <section className="weather-update">
                <WeatherPrediction day="Tomorrow" />
                <WeatherPrediction day="Sun, 7 Jun" />
                <WeatherPrediction day="Tomorrow" />
                <WeatherPrediction day="Sun, 7 Jun" />
                <WeatherPrediction day="Tomorrow" />
            </section>

            <section id="highlight">
                <h3>Today's Hightlight</h3>
                <div id="section">
                    <WindStatus />
                    <Humidity />
                    <Visibility />
                    <AirPressure />
                </div>
            </section>
            </section>
        </div>
    )
}

export default Main
