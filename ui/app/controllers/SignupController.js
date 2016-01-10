blogApp.controller('SignupController',function($scope,$http,$location,UserService) {
	console.log("SignupController!!");

	/*$scope.sign=function(user){
		console.log(user);
	}*/
	
	$scope.signUp =function(user){
		user.isInvalid=false;
		console.log("SignupController signUp called");
		UserService.registerNewUser(user).$promise.then(function(result){
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