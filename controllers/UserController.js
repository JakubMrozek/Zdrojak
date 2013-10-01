
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
  User.findForLogin(req.body.email, req.body.password, function(err, doc){
    if (err) return next(err);
    if (!doc) return res.send({});
    var maxAge = 3 * 24 * 60 * 60 * 1000;

    res.cookie('authToken', doc.hashCookie, {
      maxAge: maxAge,
      httpOnly: true /*, secure: true*/
    });

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
  res.clearCookie('authToken');
  res.end();
};
