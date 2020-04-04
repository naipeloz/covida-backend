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
    createAll: (req, res) => {
        var projectArray = req.body.projects;
        projectArray.forEach(function(value, array) {
            let data = new Project(value)
            data.save((err, newRow) => {
                if (err)
                  res.send(err)
            })
        });
        res.status(200).end();
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
