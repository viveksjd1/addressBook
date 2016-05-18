angular.module('homeModule', []).
controller('HomeCtrl', ['$scope','GetEmployees','PostEmployees'  
	, function($scope,GetEmployees,PostEmployees  ){
	$scope.showAdd = true;

	GetEmployees.query(function(data) {
	    $scope.employeeData = data;
	});
	$scope.hideList = false;
	$scope.editEmployeeData = function(employee, pos){
		$scope.editEmp = employee;
		$scope.editPosition = pos;
	}

	$scope.updateEmployeeData = function(employee, pos){
		$scope.employeeData[pos] = employee;
		$scope.editPosition = null;
	}
	$scope.saveNewEmplyee = function(){
		$scope.hideEmployeeData = false;
		$scope.employeeData.push($scope.newEmp);
		$scope.newEmp = [];
	}
	$scope.saveModData = function(){
		 PostEmployees.save($scope.employeeData,function(obj){
		 	alert("success")
		 });
	}
}])
