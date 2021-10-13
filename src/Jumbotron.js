import React, { useState } from 'react'
import "./assets/css/Jumbotron.css"
import CurrentWeather from './components/CurrentWeather'
import Search from './components/Search'

const Jumbotron = () => {
    const [isSearch, setIsSearch] = useState(false)

    const controlSearch = (state) => {
        setIsSearch(!isSearch)
    }

    return (
        <div id="Jumbotron">
            {isSearch ? <Search closeSearch={controlSearch} /> : <CurrentWeather openSearch={controlSearch} />}
        </div>
    )
}

export default Jumbotron;
