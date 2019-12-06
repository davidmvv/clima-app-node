const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.geLugarLatLng(direccion)
        const temp = await clima.getClima(coords.lat, coords.lang);
        return `El clima de ${coords.dir} es de ${ temp }°C`
    } catch (error) {
        return `No se pudo determinar el clima de ${argv.direccion}`;
    }

};

getInfo(argv.direccion).then(console.log).catch(console.log)