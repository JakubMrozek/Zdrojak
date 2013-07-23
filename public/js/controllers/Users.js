angular.module('zdrojak.controller').controller('UsersCtrl', ['$scope', 'dialog', 'api', function($scope, dialog, api) {
  $scope.users = api.user.index();

  dialog($scope, function(index){
    $scope.user = {};
    $scope.copy = {};
    if (angular.isDefined(index)) {
      angular.copy($scope.users[index], $scope.user);
      $scope.copy = $scope.users[index];
    }
  });

  $scope.add = function() {
    api.user.create($scope.user, function(res){
      $scope.user._id = res._id;
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
  	api.user.remove({id: $scope.users[index].id}, function(){
      $scope.users.splice(index, 1);
    });
  };

}]);