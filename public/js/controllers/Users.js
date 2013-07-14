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

  /**
   * Vlozeni noveho spravce.
   * 
   */
  $scope.add = function() {
    api.user.create($scope.user, function(res){
      $scope.user._id = res._id;
      $scope.users.push($scope.user);
      $scope.close('addDialog');
    });
  };

  /**
   * Aktualizace hesla.
   * 
   */
  $scope.updatePassword = function() {
    api.user.update({id: $scope.user.id}, $scope.user, function(){
      $scope.close('updatePasswordDialog');  
    });
  };

  /**
   * Aktualizace vsech udaju.
   * 
   */
  $scope.update = function() {
    api.user.update({id: $scope.user.id}, $scope.user, function(){
      for (var col in $scope.user) $scope.copy[col] = $scope.user[col];
      $scope.close('updateDialog');
    });
  };

  /**
   * Odstraneni spravce z databaze.
   */
  $scope.remove = function(index) {
  	api.user.remove({id: $scope.users[index].id}, function(){
      $scope.users.splice(index, 1);
    });
  };

}]);