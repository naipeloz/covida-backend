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
    create: (req, res) => {
        let data = new Project(req.body)
        data.save((err, newRow) => {
            if (err)
              res.send(err)
            res.json(newRow)
        })
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
