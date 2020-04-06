const mongoose = require('mongoose')
const Project = require('../models/project')
var csv = require("csvtojson");

let ProjectController = {
    getAll: (req, res) => {
        Project.find({}, (err, projects) => {
            if(err)
                res.send(err)
            res.json(projects)
        })
    },
    getFiltered: (req, res) => {
        let filters = {};
        if(req.params.zone !== 'null'){
            filters = {
                ...filters,
                zone: req.params.zone
            }
        }
        if(req.params.category !== 'null'){
            filters = {
                ...filters,
                category: req.params.category
            }
        }
        Project.find(filters)
            .populate(['category',]).exec((err, projects) => {
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
    createCsv: (req, res) => {
        var file = req.file;
        csv()
        .fromFile(file.path)
        .then(function(jsonArrayObj){
          jsonArrayObj.forEach(function(entry) {
            let data = new Project(entry)
            data.save((err, newRow) => {
                if (err)
                  res.send(err)
            })
          }, this);
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
