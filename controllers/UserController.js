
/**
 * Zavislosti modulu.
 */

var User = require(process.cwd() + '/models/User');
var Auth = require(process.cwd() + '/lib/Auth');


/**
 * GET /users
 *
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 * @param {Function} next
 */

exports.index = function(req, res, next) {
  //FIXME neposilat vsechny sloupce, pass, hash ap.
  User.find(function(err, docs){
    if (err) return next(err);
    res.send(docs);
  })
};


/**
 * POST /users/login
 *
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 * @param {Function} next
 */

exports.login = function(req, res, next){
  Auth.login(req, res, next);
};


/**
 * POST /users/logout
 *
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 * @param {Function} next
 */

exports.logout = function(req, res, next){
  Auth.logout(req, res, next);
};
