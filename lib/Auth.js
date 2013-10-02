var Auth = {};

Auth.TOKEN = 'authToken';
Auth.HEADER = 'X-Authorization';
Auth.COOKIE_MAX_AGE = 3 * 24 * 60 * 60 * 1000; //3 days

Auth.cookieSalt = null;
Auth.storageSalt = null;
Auth.passwordSalt = null;
Auth.model = null;


Auth.setCookieSalt = function(salt) {
  Auth.cookieSalt = salt;
};

Auth.setStorageSalt = function(salt) {
  Auth.storageSalt = salt;
};

Auth.setPasswordSalt = function(salt) {
  Auth.passwordSalt = salt;
};

Auth.setModel = function(model) {
  Auth.model = model;
};


Auth.login = function(req, res, next) {
  var condition = {
    email: req.body.email,
    password: req.body.password
  };

  this.model.findOne(condition, function(err, doc){
    if (err) return next(err);
    if (!doc) return res.send({});
    this.setCookieHash(res, doc);
    this.setStorageHash(res, doc);
  }.bind(this));
};

Auth.setCookieHash = function(res, user) {
  res.cookie(Auth.TOKEN, user.cookieHash, {
    maxAge: Auth.COOKIE_MAX_AGE,
    httpOnly: true
    /*, secure: true*/
  });
};

Auth.setStorageHash = function(res, user) {
  var response = {};
  response[Auth.TOKEN] = user.storageHash;
  res.send(response);
};

Auth.logout = function(req, res, next) {
  res.clearCookie(Auth.TOKEN);
  res.end();
};

Auth.hasAccess = function(req, cb) {
  var cookieHash = req.cookies[Auth.TOKEN];
  var storageHash = req.get(Auth.HEADER);

  var cond = {
    storageHash: storageHash,
    cookieHash: cookieHash
  };

  this.model.findOne(cond, function(err, doc){
    if (err) return cb(err);
    cb(null, !!doc);
  })
};


module.exports = Auth;
