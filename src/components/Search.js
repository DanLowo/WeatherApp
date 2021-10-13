import React, { useState } from 'react'
import Icon from './Icon'

const Search = ({ closeSearch }) => {
    const [searchText, setSearchText] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchText);
    }

    const LocationItem = ({location}) => (
        <div className="location-item">
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
                <LocationItem location="Lagos" />
                <LocationItem location="Berlin" />
                <LocationItem location="Bercelonia" />
            </div>
            
        </div>
    )
}

export default Search
