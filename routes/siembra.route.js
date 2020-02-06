let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

//Model
let siembraSchema = require('../models/Siembra');

//Create
router.route('/register-siembra').post((req, res, next) => {
    siembraSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

//list
router.route('/').get((req, res) => {
    siembraSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/edit-siembra/:id').get((req, res) => {
    siembraSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;