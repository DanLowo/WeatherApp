const convert = (temperatureValue, temperatureUnit) => {
    if(temperatureUnit === 'C') {
        return temperatureValue
    }
    return (temperatureValue * 9/5) + 32
}


export default convert;