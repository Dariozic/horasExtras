const mongoose = require('mongoose');
const { Schema } = mongoose;

const HorasExtrasShema = new Schema({
    documento: { type: Number, required: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    hora_inicio: { type: String, required: true },
    hora_fin: { type: String, required: true },
    hora_ini_extra: { type: String, required: true },
    hora_fin_extra: { type: String, required: true },
    motivo_hora_extra: { type: String, required: true }
});

module.exports = mongoose.model('HorasExtra', HorasExtrasShema);