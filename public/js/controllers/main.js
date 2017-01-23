
angular.module('todoController', [])
	
	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope', '$http', 'Todos', function($scope, $http, Todos) {

	
			
	$scope.formData = {};
		$scope.loading = true;
		$scope.navBarItems = [{name:'About', isActive:1}, {name:'Skills', isActive:0}, {name:'Projects', isActive:0}, {name:'Blog', isActive:0}];
		$scope.aboutToggle = true;
		$scope.aboutDescription1 = "Hi, my name is Casey Edge.  I have a  strong computer science background \n\
					    and interest in software development, specifically web technologeis.  I attended \n\
					    the University of Michigan in Ann Arbor, where I graduated  \n\
					    with a bachelor's degree in Computer Science Engineering."
		$scope.aboutDescription2 = "I'm currently seeking a position as a Front End Developer or Full Stack Developer\n\
					 to further enhance organizational worth by applying my knowledge in\n\
					 HTML, CSS, Node.js, Github, JavaScript, JSON and JQuery."


		$scope.aboutDescription3 = "I previously worked at Thomson Reuters, where I designed, maintained, \n\
					and tested C++ and C# programs for UltraTax CS, professional tax software.  \n\
					I developed data driven applications within the Agile framework, learning best \n\
					practices for DevOps and SaaS deployment.  Additionally, I was on the internal \n\
					website team, where I maintained and enhanced our team website.  I lead a \n\
					project to  develop a application for tracking patches using ASP.NET,  SQL, JavaScript\n\
					and AngularJs.  I was responsible for the application architecture at every level, \n\
					building out front end pages, RESTful API’s,  and backend database schemas and scripts."
		$scope.aboutDescription4 = "Using JavaScript, HTML, CSS, and browser developer tools,  I collaborated as a team \n\
					member in the development, maintenance, and final product of an improved engineering \n\
					website for the university.";
		var cplusDesc = "The core computer science classes at Michigan focus on C++.  Working on Linux and debugging with GDB,  I developed a multitude of projects, designed to feature the important concepts of OOP such as functional abstraction, data abstraction, and dynamic resource management.\n\
				";
		$scope.skills = [{type:"OOP", array:[{name:"C++", id:"cplusplus", desc:cplusDesc}
		, {name:"C#", id:"csharp"}, {name:"Java", id:"java"}, {name:"Objective-C", id:"objectivec"}, {name:"Python", id:"python"}]},
		{type:"Front End", array:[{name:"JavaScript", id:"javascript"}, {name: "AngularJS", id:"angularjs"}, {name: "JQuery", id:"jquery"}, {name:"HTML5", id:"html5"}, {name:"CSS", id:"css"}, {name:"React", id:'reactJS'}, {name:"Bootstrap", id:"bootstrap"}, {name: "Sass", id:"sass"}]},
		{type:"Server Side", array:[{name:"PHP", id:"php"}, {name: "Node.js", id:"nodejs"}, {name: "ASP.NET", id:"aspnet"}]},
		{type:"Database", array:[{name:"MongoDB", id:"mongodb"}, {name: "MySQL", id:"mysql"}]}

		];
		$scope.navBarClick = function($index){
		updateBody($index);
			updateActive($index);
		}
	$scope.showBody = function($index){
	if ($scope.navTitle == "About"){

	}
	}
	var updateBody = function($index){
	$scope.navTitle = $scope.navBarItems[$index].name;
		$('html, body').animate({
	scrollTop: $('#' + $scope.navBarItems[$index].name + "Wrapper").offset().top - 40
	}, 2000);
	}

	var updateActive = function($index){
	for (var i = 0; i < $scope.navBarItems.length; i++){
	if (i != $index){
	$scope.navBarItems[i].isActive = 0;
	}
	else{
	$scope.navBarItems[i].isActive = 1;
	}
	}
	}
	$(function () {
	// Check the initial Poistion of the Sticky Header
	var stickyHeaderTop = $('#stickyheader').offset().top;
		var stickyHeight = $('#stickyheader').height();
		var stickyWidth = $('#stickyheader').width();
		$(window).scroll(function () {
	if ($(window).scrollTop() > stickyHeaderTop) {
	$('#stickyheader').css({position: 'fixed', top: '0px', height:stickyHeight, width:stickyWidth});
		$('#stickyalias').css('display', 'block');
		$('#stickyalias').css('height', stickyHeight + "px");
	} else {
	$('#stickyheader').css({position: 'static', top: '0px'});
		$('#stickyalias').css('display', 'none');
	}
	});});
		$scope.hoverLanguage = function(el){
		for (var s = 0; s < $scope.skills.length; s++){
		for (var l = 0; l < $scope.skills[s].array.length; l++){
		$("#" + $scope.skills[s].array[l].id).removeClass('active');
		}
		}
		$("#" + el.id).addClass('active');
			$scope.activelanguage = el;
		}
	window.onload = function() {
	// this will fire after the entire page is loaded, including images
	$scope.hoverLanguage($scope.skills[0].array[0]);
	};
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
		.success(function(data) {
		$scope.todos = data;
			$scope.loading = false;
		});
		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

		// validate the formData to make sure that something is there
		// if form is empty, nothing will happen
		if ($scope.formData.text != undefined) {
		$scope.loading = true;
			// call the create function from our service (returns a promise object)
			Todos.create($scope.formData)

			// if successful creation, call our get function to get all the new todos
			.success(function(data) {
			$scope.loading = false;
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data; // assign our new list of todos
			});
		}
		};
		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
		$scope.loading = true;
			Todos.delete(id)
			// if successful creation, call our get function to get all the new todos
			.success(function(data) {
			$scope.loading = false;
				$scope.todos = data; // assign our new list of todos
			});	};
	}]);
