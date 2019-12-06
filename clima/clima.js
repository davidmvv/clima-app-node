const axios = require('axios');

const getClima = async(lat, lang) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=bd322aabeb9324ccff6a6a60e7e17858&units=metric`);

    return resp.data.main.temp;


}

module.exports = {
    getClima
}