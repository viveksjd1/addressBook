var app = angular.module('allEmployeesModule', ['services'])
.controller('allEmpController', ['$scope','serviceCalls','localStorage', function($scope,serviceCalls,localStorage){

	$scope.tempIndex = -1;
	if(localStorage.employee == undefined){
		serviceCalls.getEmployees().then(function(response) {
			localStorage.setData(response.data);
			$scope.content = localStorage.employee;
		}, function(response) {
			$scope.content = "Something went wrong";
		});
	}else{
		$scope.content = localStorage.employee;
	}

	$scope.saveLocalData= function(){
		if ($scope.tempIndex != -1) {
			$scope.content[$scope.tempIndex] = $scope.emp;
		}else{
			$scope.content.push($scope.emp);
		}
		localStorage.setData($scope.content);
		$scope.tempIndex = -1;
		$scope.emp ={firstName:"",lastName:"",email:"",position:""};
		$('#showModEmp').modal('hide');
	}

	$scope.editEmployeeData = function(employee, pos){
		$('#showModEmp').modal('show');
		$scope.tempIndex = pos;
		$scope.emp ={firstName:"",lastName:"",email:"",position:""};
		$scope.emp = employee;
	}

	$scope.closeDialogue = function(){
		$scope.emp ={firstName:"",lastName:"",email:"",position:""};
	}

	$scope.deleteEmployee = function(pos){
		$scope.content.splice(pos,1)
	}
	$scope.postModData = function(){
		 serviceCalls.postEmplooyees($scope.content).then(function(response) {
		 	alert("Success");
		}, function(response) {
			alert("Something went wrong");
		});
	}
}])