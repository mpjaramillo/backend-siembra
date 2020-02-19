const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let siembraSchema = new Schema({
    nombre: {
        type: String
    },
    docente: {
        type: String
    },
    horas: {
        type: String
    },
    area: {
        type: String
    }
}, {
    collection: 'siembra'
})

module.exports = mongoose.model('siembra', siembraSchema)
