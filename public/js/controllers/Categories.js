angular.module('zdrojak.controller').controller('CategoriesCtrl', ['$scope', '$window', 'api', function ($scope, $window, api) {
  $scope.categories = api.category.index();

  var getTarget = function(ev) {
  	var el = ev.target;
	  do {
	  	if (el.classList.contains('category-item')) {
	    	return el;
	    }
	    el = el.parentNode;
	  } while (el);
  };

  var getTargetList = function(ev) {
    var target = getTarget(ev);
    return target.lastElementChild;
  };

  var getElement = function(ev) {
    return $window.document.getElementById(ev.dataTransfer.getData('text'));
  };
  
  $scope.dragstart = function(ev) {
	  ev.dataTransfer.setData('text', ev.target.id);
	  $scope.trashVisible = true;
  };

  $scope.dragover = function(ev) {
    ev.preventDefault();
  };

  $scope.drop = function(ev) {
	  ev.preventDefault();
	  var element = getElement(ev);
	  var target = getTargetList(ev);

	  if (target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINS) {
	    //rodic se nemuze stat potomkem sveho potomka
	  } else {
	    target.appendChild(element);
	  }
	  $scope.trashVisible = false;
  };

  $scope.addCategory = function() {
  	var name = window.prompt('Jak se bude nová kategorie jmenovat?');
  	if (!name) return;
    api.category.create({name: name}, function(res){
      $scope.categories.push({
        id: res.id, 
        name: name
      });
    });
  };

  $scope.updateCategory = function(ev) {
    var name = ev.target.value;
    var target = getTarget(ev);
    api.category.update({id: target.id}, {name: name});
  };

  $scope.removeCategory = function(ev) {
    var confirm = window.confirm('Chcete skutečně kategorii smazat?');
    $scope.trashVisible = false;
    if (!confirm) return;
    var element = getElement(ev);
    api.category.remove({id: element.id}, function(){
      element.parentNode.removeChild(element);
    });
  };
}]);