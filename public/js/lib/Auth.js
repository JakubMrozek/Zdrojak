function Auth($http, tokenStorage, requestStorage, notifier, api) {
  this.$http = $http;
  this.tokenStorage = tokenStorage;
  this.requestStorage = requestStorage;
  this.notifier = notifier;
  this.api = api;
}

Auth.TOKEN = 'authToken';

Auth.prototype.getToken = function() {
  return this.tokenStorage.getItem(Auth.TOKEN);
};

Auth.prototype.setToken = function(token) {
  this.tokenStorage.setItem(Auth.TOKEN, token);
};

Auth.prototype.removeToken = function() {
  this.tokenStorage.removeItem(Auth.TOKEN);
};

Auth.prototype.initHeaders = function() {
  var token = this.getToken();
  if (!token) return false;
  this.setHeader(token);
};

Auth.prototype.setHeader = function(token) {
  this.$http.defaults.headers.common['X-Authorization'] = token;
};

Auth.prototype.clearHeader = function() {
  delete this.$http.defaults.headers.common.Authorization;
};

Auth.prototype.retry = function(req) {
  this.$http(req.config).then(function(response) {
    req.deferred.resolve(response);
  });
};

Auth.prototype.resendRequests = function() {
  var requests = this.requestStorage.getAll();
  for (var i = 0; i < requests.length; i++) {
    this.retry(requests[i]);
  }
  this.requestStorage.clear();
};

Auth.prototype.login = function(email, password, successCb, errorCb) {
  successCb = successCb || function() {};
  errorCb = errorCb || function() {};

  this.clearHeader();

  var credentials = {
    email: email,
    password: password
  };

  var auth = this;

  this.api.user.login(credentials, function(res){
    if (res.authToken) {
      auth.setToken(res.authToken);
      auth.setHeader(res.authToken);
      auth.resendRequests();
      auth.notifier.notifyConfirmed();
      successCb(res);
    } else {
      errorCb(res);
    }
  });
};

Auth.prototype.logout = function(cb) {
  cb = cb || function() {};
  this.removeToken();
  this.notifier.notifyRequired();
  this.api.user.logout(cb);
};
