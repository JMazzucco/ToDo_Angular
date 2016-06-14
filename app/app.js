(function(){
	var app = angular.module('toDo', []);

	app.controller('ToDoController', function($scope){

		$scope.todoTasks = [
			{text: 'Learn Angular', priority: '1', done: false},
			{text: 'Learn Python', priority: '3', done: false},
			{text: 'Train BJJ', priority: '2', done: false}
		];

		$scope.totalTodos = $scope.todoTasks.length;

		$scope.addTask = function() {
			$scope.todoTasks.push({text: $scope.formTask, priority: $scope.formPriority, done: false})
		};




	});

})();