/*var myApp = angular.module("myApp", []);

myApp.controller("headerCtrl", function($scope){
	//afficher parag 
	$scope.showContent = true;

	$scope.age = 0;
    $scope.majeurOrMineurText = function(){
        return ($scope.age >= 18) ? "majeur" : "mineur";    
    };
});
*/

var app = angular.module("app", []);

app.controller("myController", function($scope){
    $scope.showContent = true;    
});