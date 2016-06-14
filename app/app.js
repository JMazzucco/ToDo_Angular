(function(){
	var app = angular.module('toDo', []);

	app.controller('ToDoController', function($scope){

		$scope.todoTasks = [
			{text: 'Learn Angular', priority: '1', done: false},
			{text: 'Learn Python', priority: '3', done: false},
			{text: 'Train BJJ', priority: '2', done: false}
		];

		$scope.addTask = function() {
			$scope.todoTasks.push({text: $scope.formTask, priority: $scope.formPriority, done: false})
		};

		$scope.deleteTask = function(index) {
			$scope.todoTasks.splice(index, 1);
		};

		$scope.totalTodos = $scope.todoTasks.length;

	});

})();