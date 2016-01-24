blogApp.controller('LoginController',function($scope,UserService,$location) {
	console.log("LoginController !!");

	$scope.login=function(credentials){
		console.log("Username: "+credentials.username);
		console.log("password: "+credentials.password);
		UserService.loginUser(credentials).$promise.then(function(result){
			console.log(result);
		});
	}

});