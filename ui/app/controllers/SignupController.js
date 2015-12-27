blogApp.controller('SignupController',function($scope,$http,$location,UserService) {
	console.log("SignupController!!");

	$scope.signUp =function(user){

		UserService.registerNewUser(user).$promise.then(function(result){
			console.log(result);
		});
	}
});