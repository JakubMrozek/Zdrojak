/**
 * Definice API.
 */

angular.module('zdrojak.service').factory('api', ['$resource', function($resource) {
  var api = {};

  var url = '/api/v1/';

  //API stranek
  api.page = $resource(url + 'pages/:page', {}, {
    index: {method:'GET', isArray:true},
    show: {method:'GET'}
  });

  //API kategorie
  api.category = $resource(url + 'categories/:id', {}, {
    index: {method:'GET', isArray:true},
    show: {method:'GET'},
    create: {method: 'POST'},
    update: {method: 'PUT'}
  });

  //API produkty
  api.product = $resource(url + 'products/:id', {}, {
    homepage: {method:'GET', isArray:true},
    index: {method:'GET'},
    create: {method: 'POST'},
    show: {method:'GET'},
    update: {method: 'POST'}
  });

  //posilani souboru
  api.product.upload = function(params, completeFn, errorFn, cancelFn, progressFn) {
    params.upload.upload(
      'PUT',
      url + 'products/' + params.id + '/images',
      completeFn,
      errorFn,
      cancelFn,
      progressFn
    );
  }

  //API objednavky
  api.order = $resource(url + 'orders/:number', {}, {
    index: {method:'GET'},
    show: {method: 'GET'},
    create: {method: 'POST'},
    update: {method: 'PUT'},
    updateStatus: {method: 'POST'}
  });

  //API uzivatele
  api.user = $resource(url + 'users/:id', {}, {
    index: {method:'GET', isArray: true},
    create: {method: 'POST'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'}
  });

  //API parametry
  api.parameter = $resource(url + 'parameters/:id', {}, {
    index: {method:'GET', isArray: true},
    show: {method: 'GET'},
    create: {method: 'POST'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'}
  });

  return api;
}]);