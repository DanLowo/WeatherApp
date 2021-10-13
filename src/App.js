import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import "./assets/css/App.css"
import Jumbotron from "./Jumbotron";
import 'material-design-icons/iconfont/material-icons.css'
import Main from "./Main";

// redux
import { getWeather } from './store/weather'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWeather())
  })

  return (
    <div className="App">
      <Jumbotron />
      <Main />
    </div>
  );
}

export default App;
