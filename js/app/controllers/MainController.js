function MainController($scope) {
	$scope.name = "Mendel"
}

angular
	.module('app')
	.controller('MainController', MainController);