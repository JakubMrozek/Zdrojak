angular.module('zdrojak.controller').controller('UsersCtrl', ['$scope', 'dialog', 'api', function($scope, dialog, api) {
  $scope.users = api.user.index();

  dialog($scope, function(index){
    $scope.user = {};
    if (angular.isDefined(index)){
      $scope.user.id = getId(index);
    } 
  });

  $scope.add = function() {
    api.user.create($scope.user, function(res){
      $scope.user.id = res.id;
      $scope.users.push($scope.user);
      $scope.close('addDialog');
    });
  };

  $scope.updatePassword = function() {
    api.user.update({id: $scope.user.id}, $scope.user, function(){
      $scope.close('updatePasswordDialog');  
    });
  };


  $scope.update = function(ev, data) {
    api.user.update({id: data.id}, data);
  };

  $scope.remove = function(index) {
    if (!window.confirm('Chcete skutečně uživatele smazat?')) return;
  	api.user.remove({id: getId(index)}, function(){
      $scope.users.splice(index, 1);
    });
  };

  var getId = function(index) {
    return $scope.users[index].id;
  };

}]);