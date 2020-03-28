const mongoose = require('mongoose')
const Section = require('../models/section')

let SectionController = {
    getAll: (req, res) => {
        Section.find({}, (err, sections) => {
            if(err)
                res.send(err)
            res.json(sections)
        })
    },
    create: (req, res) => {
        let data = new Section(req.body)
        data.save((err, newRow) => {
            if (err)
              res.send(err)
            res.json(newRow)
        })
    }
}

module.exports = SectionController
