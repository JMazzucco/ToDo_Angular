(function(){
	var app = angular.module('toDo', []);

	app.controller('ToDoController', function($scope){

		$scope.todoTasks = [
			{text: 'Learn Angular', priority: 'high', done: false},
			{text: 'Learn Python', priority: 'low', done: false},
			{text: 'Train BJJ', priority: 'medium', done: false}
		];

		$scope.totalTodos = $scope.todoTasks.length;

		$scope.addTask = function() {

		};


	});

})();