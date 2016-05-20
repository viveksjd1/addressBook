var mainApp = angular.module("mainApp", ['ngRoute','homeModule','allEmployeesModule','addEmployeesModule','services']);

mainApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', { templateUrl: 'homeFolder/home.html',controller: 'homeController'})
	.when('/allEmployees', { templateUrl: 'allEmployeesFolder/allEmployees.html',controller: 'allEmpController'})
	.when('/addEmployee', {templateUrl: 'addEmployeeFolder/addEmployee.html',controller: 'addEmpController'})
	.otherwise({redirectTo: '/home'});
}]);



