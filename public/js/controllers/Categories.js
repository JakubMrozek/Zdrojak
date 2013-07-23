var trash;

var hideTrash = function() {
  trash.style.display = 'none';	
}

function getTarget(ev) {
	var el = ev.target;
  do {
    if (el.classList.contains('category-item')) {
    	return el.lastElementChild;
    }
    el = el.parentNode;

  } while (el);
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
	trash.style.display = '';
}

function drop(ev) {
  ev.preventDefault();
  var element = document.getElementById(ev.dataTransfer.getData('text'));
  var target = getTarget(ev);

  if (target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINS) {
    //rodic se nemuze stat potomkem sveho potomka
  } else {
    target.appendChild(element);
  }

  hideTrash();
}

function removeCategory(ev) {
  if (!window.confirm('Skutečně smazat?')) {
  	hideTrash();
    return false;
  }
  var element = document.getElementById(ev.dataTransfer.getData('text'));
  element.parentNode.removeChild(element);
  hideTrash();
};



angular.module('zdrojak.controller').controller('CategoriesCtrl', ['$scope', 'api', function ($scope, api) {
  $scope.categories = api.category.index();


  $scope.addCategory = function() {
  	var name = window.prompt('Jak se bude nová kategorie jmenovat?');
  	if (!name) return;
  	$scope.categories.push({
  		name: name
  	});
  };

  $scope.updateCategory = function() {
    //...implementace aktualizace kategorie
  };

  trash = document.getElementById('trash');
}]);