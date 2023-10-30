var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');


/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('index', {
    title: 'Home',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));


module.exports = router;
