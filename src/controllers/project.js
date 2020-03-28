const mongoose = require('mongoose')
const Project = require('../models/project')

let ProjectController = {
    getAll: (req, res) => {
        Project.find({}, (err, projects) => {
            if(err)
                res.send(err)
            res.json(projects)
        })
    },
    create: (req, res) => {
        let data = new Project(req.body)
        data.save((err, newRow) => {
            if (err)
              res.send(err)
            res.json(newRow)
        })
    },
    getByCategoryId: (req,res) => {
        Project.find({ category: req.params.id } )
            .populate(['category',]).exec((err, projects) => {
                if(err)
                    res.send(err)
                res.json(projects)
            })
    },
}

module.exports = ProjectController
