'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _connect = require('../helpers/connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PromotionsController = function () {
    function PromotionsController() {
        _classCallCheck(this, PromotionsController);
    }

    _createClass(PromotionsController, null, [{
        key: 'getAllPromotions',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
                var query, _ref2, rows;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                query = 'select * from promotions';
                                _context.prev = 1;
                                _context.next = 4;
                                return _connect2.default.query(query);

                            case 4:
                                _ref2 = _context.sent;
                                rows = _ref2.rows;
                                return _context.abrupt('return', res.status(200).send(rows));

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](1);

                                console.log(_context.t0);
                                return _context.abrupt('return', res.status(400).send(_context.t0));

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 9]]);
            }));

            function getAllPromotions(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return getAllPromotions;
        }()
    }, {
        key: 'CreatePromotion',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
                var query, name, pictureLink, values, _ref4, rows, rowCount;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                query = 'insert into promotions (name, picture_link) values ($1 , $2)';
                                name = req.body.name;
                                pictureLink = req.body.pictureLink;
                                values = [name, pictureLink];
                                _context2.prev = 4;
                                _context2.next = 7;
                                return _connect2.default.query(query, values);

                            case 7:
                                _ref4 = _context2.sent;
                                rows = _ref4.rows;
                                rowCount = _ref4.rowCount;
                                return _context2.abrupt('return', res.status(200).send({ rows: rows, rowCount: rowCount }));

                            case 13:
                                _context2.prev = 13;
                                _context2.t0 = _context2['catch'](4);
                                return _context2.abrupt('return', res.status(400).send(_context2.t0));

                            case 16:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[4, 13]]);
            }));

            function CreatePromotion(_x3, _x4) {
                return _ref3.apply(this, arguments);
            }

            return CreatePromotion;
        }()
    }, {
        key: 'DeletePromotion',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
                var query, data, values, _ref6, rows, rowCount;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                query = 'delete from promotions where id=$1';
                                data = req.params.id;
                                values = [data];
                                _context3.prev = 3;
                                _context3.next = 6;
                                return _connect2.default.query(query, values);

                            case 6:
                                _ref6 = _context3.sent;
                                rows = _ref6.rows;
                                rowCount = _ref6.rowCount;
                                return _context3.abrupt('return', res.status(200).send({ rows: rows, rowCount: rowCount }));

                            case 12:
                                _context3.prev = 12;
                                _context3.t0 = _context3['catch'](3);
                                return _context3.abrupt('return', res.status(400).send(_context3.t0));

                            case 15:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[3, 12]]);
            }));

            function DeletePromotion(_x5, _x6) {
                return _ref5.apply(this, arguments);
            }

            return DeletePromotion;
        }()
    }]);

    return PromotionsController;
}();

exports.default = PromotionsController;