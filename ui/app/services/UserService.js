blogApp.factory("UserService",function($resource) {

	var registerUserResource=$resource('/user/register',{},{
		registerNewUser:{
			method :'POST',
			headers: {'Content-Type': 'application/json'}
		}
	});


	return {
		registerNewUser : function(user){
			return registerUserResource.registerNewUser({user:user});
		}
	}
	
});