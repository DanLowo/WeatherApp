import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchAndSetWeather, changeLocation } from '../store/weather'
import Icon from './Icon'

const Search = ({ closeSearch }) => {
    const dispatch = useDispatch()
    const { searchResult } = useSelector(state => state.weather)
    const [searchText, setSearchText] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchAndSetWeather(searchText))
    }

    const LocationItem = ({location, woeid}) => (
        <div className="location-item"  onClick={() => {
            dispatch(changeLocation(woeid))
            closeSearch()
        }}>
            <p className="location-item-text">{location}</p>
            <span className="location-item-icon">
                <Icon name="chevron_right" />
            </span>
        </div>
    )

    return (
        <div id="search">
            <section align="right" onClick={closeSearch} >
                <Icon name="close" />
            </section>
            <div className="search-form">
                <form onSubmit={handleSearch}>
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="search location" />
                    <button type="submit" id="submit-button">Search</button>
                </form>
            </div>

            <div className="locations">
                {
                    searchResult.map((item, k) => {
                        return <LocationItem key={k} location={item.title} woeid={item.woeid} />
                    })
                }
            </div>
            
        </div>
    )
}

export default Search
