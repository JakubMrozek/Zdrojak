var Auth = {};

Auth.options = {};

Auth.set = function(options) {
  var required = [
    'salt1',
    'salt2',
    'salt3',
    'cookieMaxAge',
    'passwordIterations1',
    'passwordIterations3',
    'passwordKeylen1',
    'passwordKeylen3',
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
