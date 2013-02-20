describe('FormFilter', function(){   
    
  var filter;  
  beforeEach(function(){
    var $scope = {};
    var config = {
      limit: 10,
      orderColumns: ['date', '-date'],
      filterColumns: ['status', 'date'],
      querySearch: true  
    };
    var urlFilter = new UrlFilter(config);
    
    filter = new FormFilter($scope, config, urlFilter);  
  });
  
  it('vrati vychozi nastaveni', function() {
    var def = {
      offset: 0, 
      limit: 10,
      filter: '',
      query: '',
      order: 'date'
    };
    expect(filter.getApiData()).toEqual(def);
  });
  
  //TODO: doplnit dalsi testy
  
});