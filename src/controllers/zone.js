const mongoose = require('mongoose')
const Zone = require('../models/zone')

let ZoneController = {
    getAll: (req, res) => {
        Zone.find({}, (err, zones) => {
            if(err)
                res.send(err)
            res.json(zones)
        })
    },
    create: (req, res) => {
        let data = new Zone(req.body)
        data.save((err, newRow) => {
            if (err)
              res.send(err)
            res.json(newRow)
        })
    }
}

module.exports = ZoneController
