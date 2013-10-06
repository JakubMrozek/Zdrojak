var Auth = {};

Auth.options = {};

Auth.set = function(options) {
  var required = [
    'systemCookieSalt',
    'systemStorageSalt',
    'systemPasswordSalt',
    'systemSignedCookieSalt',
    'cookieIterations',
    'passwordIterations',
    'cookieKeylen',
    'passwordKeylen',
    'randomBytesSize',
    'maxAge',
    'tokenName',
    'httpHeader'
  ];

  for (var i = 0; i < required.length; ++i) {
    if (!(required[i] in options)) {
      throw new Error('Option ' + required[i] + ' is required.');
    }
  }

  Auth.options = options;
};

Auth.setModel = function(model) {
  Auth.options.model = model;
};

module.exports = Auth;
