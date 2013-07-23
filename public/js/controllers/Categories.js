function getTarget(ev) {
  switch (ev.target.nodeName) {
  	case 'LI':
  	  var target = ev.target;
  	  break;
  	case 'SPAN':
  		var target = ev.target.nextSibling;
  		break;
  	case 'I':
  		var target = ev.target.nextSibling.nextSibling;
  		break;
  }
  return target;
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
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
}




angular.module('zdrojak.controller').controller('CategoriesCtrl', ['$scope', 'api', function ($scope, api) {
  $scope.categories = api.category.index(function(){
  	
  });

}]);