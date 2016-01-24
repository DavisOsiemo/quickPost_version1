blogApp.factory("UserService",function($resource) {

	var registerUserResource=$resource('/user/register',{},{
		registerNewUser:{
			method :'POST',
			headers: {'Content-Type': 'application/json'}
		}
	});

	var loginResource=$resource('/user/login',{},{
		loginUser:{
			method :'POST',
			headers:{'Content-Type':'application/json'}
		}
	});


	return {
		registerNewUser : function(user){
			return registerUserResource.registerNewUser({user:user});
		},
		loginUser : function(credentials){
			return loginResource.loginUser({credentials:credentials});
		}
	}
	
});