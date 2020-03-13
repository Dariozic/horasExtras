const axios = require('axios');
const HorasExtra = require('../models/horasExtra');

class HorasExtrasController {
    async index(req, res) {
        const horasExtras = await HorasExtra.find();
        res.json(horasExtras);
    }
    
    async create(req, res) {
        const horasExtra = new HorasExtra(req.body);
        await horasExtra.save();
        res.json({
            'status': 'Horas extras saved.'
        });
    }

    async getUsers(req, res) {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            res.json(response.data);
        });
    }
}

module.exports = new HorasExtrasController();