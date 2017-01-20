(function() {
  angular.module('app')
    .controller('createGroup', function($scope, $location, $window, $route, AppManager) {
      $scope.group = {}

      var data = $route.current.params
      console.log(data)
      $scope.group.user_id = data.user_id
      $scope.group.fb_id = data.fb_id
      var action = data.action
      $scope.submit = function() {
		if(action == "create"){
			console.log('create')
			console.log($scope.group)
			AppManager.checkGroupName($scope.group.group_name)
			.then(function(result){
				console.log(result)
				$scope.group_name_exists = false;
				if(result.exists){
					console.log("Group Name exists")
					$scope.group_name_exists = true;
				}
				else {
					$scope.group_name_exists = false;
					AppManager.createGroup($scope.group)
					.then(function(data){
						console.log(data)
						window.top.close();
					}, function(err){
						console.log(err)
				})			
			}
		})
	}
	else if(action == "join"){
		console.log('join')
		//$scope.join = false;
		AppManager.checkGroupNamePassword($scope.group.group_name, $scope.group.password)
        .then(function(result){
			console.log(result)
			if(result.exists){
				$scope.group.group_id = result.data.id
				$scope.join = false;
				AppManager.joinGroup($scope.group)
				.then(function(data){
						console.log(data)
						window.top.close();
					}, function(err){
						console.log(err)
				})		
			}
			else {
				$scope.join = true;
			}
		})
		}
	}
   });
})();
