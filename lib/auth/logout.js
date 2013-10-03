var config = require(process.cwd() + '/lib/auth/config');

module.exports = function() {
  return function(req, res, next) {
    res.clearCookie(config.options.tokenName);
    res.end();
  }
};
