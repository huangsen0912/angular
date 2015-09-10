var app = angular.module("myapp.filter",[]);

app.filter('rJs',function(){
	return function(input,n1,n2){
		console.log(input);

		console.log(n1);
		console.log(n2);
		return input.replace(/f/,"依赖") ;
	}

});