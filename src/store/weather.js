import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const slice = createSlice({
    name: 'weather',
    initialState: {
        today: {},
        others: [],
        state: '',
        searchResult: [],
        unit: 'C'
    },
    reducers: {
        setWeather: (state, action) => {
            state.today = action.payload.today
            state.others = action.payload.others
            state.state = action.payload.state
        },
        setSearchResult: (state, action) => {
            state.searchResult = action.payload
        },
        setUnit: (state, action) => {
            state.unit = action.payload
        }
    }
})

export default slice.reducer


//actions

const { setWeather, setSearchResult, setUnit } = slice.actions

export const getWeather = () => async dispatch => {

    const searchLocation = async(latitude, longitude) => {
        try {
            const { data } = await axios.get(`https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`)
            const { woeid } = data[0]

            if(woeid) {
                const weather = await axios.get(`https://www.metaweather.com/api/location/${woeid}`)
                const { consolidated_weather, title } = weather.data
                const others = []
                for(let i=1; i < consolidated_weather.length; i++) {
                    others.push(consolidated_weather[i])
                }

                dispatch(setWeather({ today: consolidated_weather[0], others, state: title }))
            } 
        } catch (err) {
            
        }
    }

    const getLocation = async() => {
        try {
            await navigator.geolocation.getCurrentPosition(position => {
                const {coords: { latitude, longitude }} = position
                searchLocation(latitude, longitude)
            })    
        } catch (err) {
            console.log(err);
        }
    }

    getLocation()

}

export const searchAndSetWeather = (name) => async dispatch => {
    console.log(name)
    const searchLocation = async(searchName) => {
        try {
            const { data } = await axios.get(`https://www.metaweather.com/api/location/search/?query=${searchName}`)
            dispatch(setSearchResult(data))
        } catch (err) {
            
        }
    }

    searchLocation(name)
}

export const changeLocation = (woeid) => async dispatch => {
    try {
        const weather = await axios.get(`https://www.metaweather.com/api/location/${woeid}`)
        const { consolidated_weather, title } = weather.data
        const others = []
        for(let i=1; i < consolidated_weather.length; i++) {
            others.push(consolidated_weather[i])
        }

        dispatch(setWeather({ today: consolidated_weather[0], others, state: title }))
    } catch (err) {
        console.log(err)
    }
}

export const changeUnit = (type) => async dispatch => {
    dispatch(setUnit(type))
}
