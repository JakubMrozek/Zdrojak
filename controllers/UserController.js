
/**
 * Zavislosti modulu.
 */

var User = require(process.cwd() + '/models/User');


/**
 * GET /users
 *
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 * @param {Function} next
 */

exports.index = function(req, res, next) {
  User.find({}, 'name email', function(err, docs){
    if (err) return next(err);
    res.send(docs);
  })
};
