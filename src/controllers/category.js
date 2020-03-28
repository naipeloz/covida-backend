const mongoose = require('mongoose')
const Category = require('../models/category')

let CategoryController = {
    getAll: (req, res) => {
        Category.find({}, (err, categories) => {
            if(err)
                res.send(err)
            res.json(categories)
        })
    },
    create: (req, res) => {
        let data = new Category(req.body)
        data.save((err, newRow) => {
            if (err)
              res.send(err)
            res.json(newRow)
        })
    },
    getBySectionId: (req,res) => {
        Category.find({ section: req.params.id } )
            .populate(['section',]).exec((err, categories) => {
                if(err)
                    res.send(err)
                res.json(categories)
            })
    },
}

module.exports = CategoryController
