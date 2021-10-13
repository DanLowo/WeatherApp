import React from 'react'
import Icon from './Icon'
import { useDispatch } from 'react-redux'
import { changeUnit } from '../store/weather'

const Converter = () => {
    const dispatch = useDispatch()
    return (
        <div align="right">
            <button style={{backgroundColor: 'transparent', border: 0}} onClick={() => dispatch(changeUnit('C'))}>
                <Icon name="C" background />
            </button>
            <button style={{backgroundColor: 'transparent', border: 0}} onClick={() => dispatch(changeUnit('F'))}>
                <Icon name="F" background />
            </button>
        </div>
    )
}

export default Converter
