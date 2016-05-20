var app = angular.module('services', [])

.factory('serviceCalls', ['$http', function($http){
	var obj={};
	obj.getEmployees = function(){
		return $http.get("/employees");
	}
	obj.postEmplooyees = function(data){
		return $http.post("/employeeModifications",data);
	}
	return obj;
}])

.factory('localStorage', [function(){
	var empData = {};
	empData.setData = function(obj) {
		empData.employee = obj;
	}
	empData.pushRecord = function(record){
		if(empData.employee != undefined){
			empData.employee.push(record);
		}
	}
	return empData;
}])
