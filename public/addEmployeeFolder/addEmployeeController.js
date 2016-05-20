var app = angular.module('addEmployeesModule', [])
.controller('addEmpController', ['$scope','localStorage', function($scope,localStorage){

	$scope.content = localStorage.employee;

}])