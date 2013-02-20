/**
 * Parametricke vyhledavani pro administraci.
 * 
 * @param {Object} $scope
 * @param {Object} config
 * @param {UrlFilter} filter
 * @param {$location} $location
 */

function FormFilter($scope, config, filter, $location) {
  this._$scope = $scope;
  this._$location = $location;
  this._filter = filter;
  this._limit = config.limit || 10;
  this._orderColumns  = config.orderColumns || [];
  this._filterColumns = config.filterColumns || [];
  this._querySearch  = Boolean(config.querySearch);
  this._init();
}


/**
 * Uvodni inicializace dat podle defaultniho nastaveni a 
 * podle hodnot z URL (pokud jiz nejake filtrovani probehlo).
 * 
 */

FormFilter.prototype._init = function() {
  this._offset = this.filter().getOffset();
  this._$scope.limit  = this._filter.getLimit();
  this._$scope.page   = this._filter.getPage();
  if (this._querySearch) {
    this._$scope.query  = this._filter.getParam('query');  
  }
  for (var i = 0; i < this._filterColumns.length; ++i) {
    this._$scope[this._filterColumns[i]] = this._filter.getFilterParamAsString(this._filterColumns[i], '');   
  }
};


/**
 * Projde formular filtrovani a prevede jejich hodnoty do retezece, 
 * který se pak bude zasilat na API v parametru query.
 * 
 * Napr. formular vypada takto:
 *   <form>
 *     <input ng-model="price"> 
 *     <input ng-model="vat"> 
 *   </form>
 * 
 * Po zavolani metody serialize() bude vracen tento retezec 
 * (pro price = 1000 a vat = 20): price:1000@vat:20    
 * 
 * 
 * @return {String}
 */

FormFilter.prototype.serialize = function() {
  var values = [];
  for (var i = 0; i < this._filterColumns.length; ++i) {
    if (this._$scope[this._filterColumns[i]]) {
      values.push(this._filterColumns[i] + ':' + this._$scope[this._filterColumns[i]]);   
    }  
  }
  return values.join('@');  
};


/**
 * Po zmene formulare pro filtrovani provede aktualizaci URL.
 */

FormFilter.prototype.updateUrl = function() {
  var query = this.getApiData();
  this._$location.search({
    offset: query.offset, 
    limit: query.limit,
    filter: query.filter,
    query: query.query,
    order: query.order
  });    
};


/**
 * Vrati vsechny data pro dotaz na API.
 * 
 * @return {Object}
 */

FormFilter.prototype.getApiData = function() {
  var query = {};
  query.offset = this.getOffset();  
  query.query  = this._$scope.query || '';
  query.limit  = this._$scope.limit;
  query.filter = this._$scope.form.serialize();
  query.order  = this._$scope.form.filter().getOrder();
  return query;
};


/**
 * @return {Number}
 */

FormFilter.prototype.getOffset = function() {
  return this._offset || 0;  
};


/**
 * @param {Number} offset
 */

FormFilter.prototype.setOffset = function(offset) {
  this._offset = offset;  
};


/**
 * @return {FormFilter}
 */

FormFilter.prototype.filter = function() {
  return this._filter;
};