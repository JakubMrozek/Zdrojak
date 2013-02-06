

function ParametricSearch(config) {
  this._limit  = config.limit;
  this._sortColumns = config.sortColumns;
}

//vratit vsechny parametry
ParametricSearch.prototype.getParams = function() {
  return this._params;
};

//vratit jeden parametr
ParametricSearch.prototype.getParam = function(name, def) {
  return this._params[name] || def;
};

//vratit jeden parametr - filter
ParametricSearch.prototype.getFilterParam = function(name, def) {
  var filter = this.getParam('filter');
  if (angular.isUndefined(filter)) {
    return def;    
  }
  return filter[name] || def;
};

ParametricSearch.prototype.getFilterParamString = function(name, def) {
  return this.getFilterParam(name, def).toString();   
};

//nastaveni parametru
ParametricSearch.prototype.setParams = function(params) {
  this._params = params;
  this._parseFilter();
};

//maximalni pocet clanku na stranku
ParametricSearch.prototype.getLimit = function() {
  return this._limit;    
};

//vrati aktualni stranku
ParametricSearch.prototype.getPage = function() {
  var offset = this._params.offset;
  if (angular.isUndefined(offset)) return 1;
  var page = (offset / this.getLimit()) + 1; 
  if (page < 1) return 1;
  if (offset % this.getLimit() !== 0) return 1;
  return page;
};

//vrati od ktereho zaznamu strankovat
ParametricSearch.prototype.getOffset = function() {
  if (this.getPage() === 1) return 0;
  return this._params.offset;
};

//razeni polozek
ParametricSearch.prototype.getSort =  function() {
  var key = this._sortColumns.indexOf(this._params.sort);
  if (~key) {
    return this._sortColumns[key];
  } else {
    return this._sortColumns[0];  
  }
};

//vraci vsechny parametry
ParametricSearch.prototype._parseFilter = function() {
  var params = {};
  var filter = this._params.filter;
  if (angular.isString(filter)) {
    filter.split('@').forEach(function(rule){
      var parts = rule.split(':');
      if (parts.length !== 2) return;
      params[parts[0]] = parts[1].split(',');
    });
  } 
  this._params.filter = params; 
   
};
