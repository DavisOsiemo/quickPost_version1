blogApp.controller('SignupController',function($scope,$location,UserService) {
	console.log("SignupController!!");
	
	$scope.signUp =function(user){
		user.isInvalid=false;
		console.log("SignupController signUp called");
		UserService.registerNewUser(user).$promise.then(function(result){
			console.log(result);

			if(result.status===true){
				user.usernameError=result.username_error;
				user.isInvalid=true;
				$location.path('/signup');				
			}else{
				$location.path('/');
			}
		});
	}
});