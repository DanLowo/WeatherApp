import React from 'react'
import './assets/css/Main.css'
import Converter from './components/Converter'
import Icon from './components/Icon'
import WeatherPrediction from './components/WeatherPrediction'

import { useSelector } from 'react-redux'
import moment from 'moment'

const Main = () => {
    const { others, today } = useSelector(state => state.weather)

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
            <h3> <span>{Math.round(today.wind_speed)}</span>mph</h3>
            <h5>
                <span><Icon name="send" background/></span>
                <span>{today.wind_direction_compass}</span>
            </h5>
        </div>
    )

    const Humidity = () => (
        <div className="section-box">
            <h1>Humidity</h1>
            <h3> <span>{today.humidity}</span>%</h3>
            <div id="measurement">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div id="bar">
                <p style={{width: today.humidity + '%'}} />
            </div>
            <div style={styles.percentage}>%</div>
        </div>
    )

    const Visibility = () => (
        <div className="section-box">
            <h1>Visibility</h1>
            <h3> <span>{Math.floor(today.visibility)}</span> miles</h3>
            <p></p>
        </div>
    )

    const AirPressure = () => (
        <div className="section-box">
            <h1>Air Pressure</h1>
            <h3> <span>{today.air_pressure}</span> mb</h3>
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
                {
                    others.map((item, k) => {
                        const formatDate = moment(item.applicable_date).format("ddd D MMM")
                        return (
                            <WeatherPrediction 
                                key={k} day={formatDate}
                                weatherStateName={item.weather_state_name}
                                min_temp={Math.round(item.min_temp)}
                                max_temp={Math.round(item.max_temp)}
                            />
                        )
                    })
                }
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
