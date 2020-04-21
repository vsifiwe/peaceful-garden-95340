'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _categories = require('../controllers/categories');

var _categories2 = _interopRequireDefault(_categories);

var _promotions = require('../controllers/promotions');

var _promotions2 = _interopRequireDefault(_promotions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.Router)();

app.get('/', function (req, res) {
    return res.status(200).send({
        message: 'YAY! Congratulations! Your first endpoint is working'
    });
});

app.get('/categories', _categories2.default.getAllCategories);
app.delete('/deletecategories/:id', _categories2.default.DeleteCategory);
app.post('/createcategory', _categories2.default.CreateCategory);
app.get('/promotions', _promotions2.default.getAllPromotions);
app.delete('/deletepromotion/:id', _promotions2.default.DeletePromotion);
app.post('/createpromotion', _promotions2.default.CreatePromotion);
app.delete('*', function (req, res) {
    return res.status(404).send({
        message: 'This Directory does not exist'
    });
});

exports.default = app;