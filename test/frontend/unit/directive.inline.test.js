describe('inline', function() {
  var elm, scope;

  beforeEach(module('zdrojak'));

  beforeEach(inject(function($rootScope, $compile) {
    
    elm = angular.element(
      '<p>' +
        '<inline value="testvalue" action="update">' +
        '</inline>' +
      '</p>');

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
    
    scope.$apply(function() {
      scope.testvalue = 'Lorem ipsum';
    });  
    
  }));

  it('pri inicializaci zobrazi data z modelu v direktive', inject(function() {
    expect(elm.find('span').eq(0).text()).toBe('Lorem ipsum');
  }));
  
  it('po kliknuti na element zobrazi pole pro editaci', inject(function() {
    expect(elm.find('span').css('display')).not.toBe('none');
    expect(elm.find('input').css('display')).toBe('none');
    expect(elm.find('textarea').css('display')).toBe('none');
    
    elm.find('span').click();    
    
    expect(elm.find('span').css('display')).toBe('none');
    expect(elm.find('input').css('display')).not.toBe('none');
    expect(elm.find('textarea').css('display')).toBe('none');
  }));
  
  it('po kliknuti na element zobrazi pole pro editaci', inject(function() {
    elm.find('span').click();    
  }));
});