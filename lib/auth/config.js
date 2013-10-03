var Auth = {};

Auth.options = {};

Auth.set = function(options) {
  var required = [
    'cookieSalt',
    'cookieMaxAge',
    'storageSalt',
    'passwordSalt',
    'passwordIterations',
    'passwordKeylen',
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
