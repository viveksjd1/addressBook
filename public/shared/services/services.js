angular.module('app.services', ['ngResource'])

.factory("GetEmployees", function($resource) {
  return $resource("/employees");
})

.factory("PostEmployees", function($resource) {
  return $resource("/employeeModifications");
})



