const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let siembraSchema = new Schema({
    agricultor: {
        type: String
    },
    parcela: {
        type: String
    },
    fecha: {
        type: String
    },
    especie: {
        type: String
    }
}, {
    collection: 'siembra'
})

module.exports = mongoose.model('Siembra', siembraSchema)