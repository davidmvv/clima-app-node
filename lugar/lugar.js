const axios = require('axios');

const geLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '69658ad43fmsh62b7d818bd5fe43p12f1d8jsn6c1320cfbaa8' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay Resultados para ${direccion}`)
    }

    const data = resp.data.Results[0]
    const dir = data.name;
    const lat = data.lat;
    const lang = data.lon;

    return {
        dir,
        lat,
        lang
    }
}

module.exports = {
    geLugarLatLng
}