
/**
 * Zavislosti modulu.
 */

var User = require(process.cwd() + '/models/User');


/**
 * POST /users/login
 *
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 * @param {Function} next
 */

exports.login = function(req, res, next){
  User.findForLogin(req.body.email, req.body.password, function(err, doc){
    if (err) return next(err);
    if (!doc) return res.send({});
    res.send({
      authToken: doc.hashStorage
    });
  });
};


/**
 * POST /users/logout
 *
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 * @param {Function} next
 */

exports.logout = function(req, res, next){
  console.log('zdee');
};
