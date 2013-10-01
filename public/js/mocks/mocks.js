
/*
 * Simulace dotazu na api pomoci Apiary
 *
 * http://www.zdrojak.cz/clanky/angularjs-direktivy-a-testovani/
 */

angular.module('zdrojak.mock').run(function($httpBackend) {

  apiary.forEach(function(section){
    var resources = section.resources;
    resources.forEach(function(res){
      var url = '/api/v1' + res.url;
      url = url.replace(/{[^}]+}/g, 'ZDROJAK_PARAM');
      //preg_quote pro javascript: http://stackoverflow.com/questions/6828637/escape-regexp-strings
      url = url.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + '' + '-]', 'g'), '\\$&');
      url = url.replace(/ZDROJAK_PARAM/g, '([^&]*)');
      url = new RegExp(url + '$');
      switch (res.method) {
        case 'GET':
          $httpBackend.whenGET(url).respond(res.responses[0].status, res.responses[0].body);
          break;
        case 'POST':
          $httpBackend.whenPOST(url).respond(res.responses[0].status, res.responses[0].body);
          break;
        case 'PUT':
          $httpBackend.whenPUT(url).respond(res.responses[0].status, res.responses[0].body);
          break;
        case 'DELETE':
          $httpBackend.whenDELETE(url).respond(res.responses[0].status, res.responses[0].body);
          break;
      }
    });
  });

  //nechat projit pozadavky na sablony
  $httpBackend.whenGET(/^\/partials\//).passThrough();

  //TODO nechat projit nektere requesty, vyresi Mockapito
  $httpBackend.whenPOST(new RegExp('/api/v1/users/login')).passThrough();
  $httpBackend.whenPOST(new RegExp('/api/v1/users/logout')).passThrough();
  $httpBackend.whenGET(new RegExp('/api/v1/users')).passThrough();
});
