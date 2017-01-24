
angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope', '$http', 'Todos', function ($scope, $http, Todos) {


		$scope.skillsGridToggle = true;
		$scope.formData = {};
		$scope.loading = true;
		$scope.navBarItems = [{name: 'About', isActive: 1}, {name: 'Skills', isActive: 0}, {name: 'Projects', isActive: 0}, {name: 'Blog', isActive: 0}];
		$scope.aboutToggle = true;
		$scope.aboutDescription1 = "Hi, my name is Casey Edge.  I have a  strong computer science background \n\
					    and interest in software development, specifically web technologeis.  I attended \n\
					    the University of Michigan in Ann Arbor, where I graduated  \n\
					    with a bachelor's degree in Computer Science Engineering."
		$scope.aboutDescription2 = "I am seeking a position as a Front End Developer or Full Stack Developer\n\
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
		var cSharpDesc = "C#";
		var javaDesc = "Java";
		var objCDesc = "Objective C";
		var pythonDesc = "Python";
		var javaScriptDesc = "JavaScript";
		var angularDesc = "Angular";
		var jqueryDesc = "jquery";
		var HTML5Desc = "HTML5";
		var CSSDesc = "CSS"
		var BootStrapDesc = "Bootstrap";
		var SassDesc = "Sass";
		var PHPDesc = "CSS"
		var NodeJsDesc = "Bootstrap";
		var ASPNETDesc = "Sass";
		var MongoDbDesc = "MongoDB"
		var MySQLDesc = "MYSql";		
			
		$scope.skills = [
		    {type: "Front End", array: [
			    {name: "JavaScript", id: "javascript", desc: javaScriptDesc, img: ['javascriptLogo.svg']},
			    {name: "AngularJS", id: "angularjs", desc: javaScriptDesc, img: ['angularjs.png']},
			    {name: "JQuery", id: "jquery", desc: javaScriptDesc, img: ['jqueryLogo.png']},
			    {name: "HTML5", id: "html5", desc: javaScriptDesc, img: ['html5logo.png']},
			    {name: "CSS", id: "css", desc: javaScriptDesc, img: ['csslogo.png']},
			    {name: "React", id: 'reactJS', desc: javaScriptDesc, img: ['reactLogo.png']},
			    {name: "Bootstrap", id: "bootstrap", desc: javaScriptDesc, img: ['boostrapLogo.png']},
			    {name: "Sass", id: "sass", desc: javaScriptDesc, img: ['sasslogo.png']}]},
		    {type: "OOP", array: [
			    {name: "C++", id: "cplusplus", desc: cplusDesc, img: ['terminalC++.png','linux.jpg']},
			    {name: "C#", id: "csharp", desc: cSharpDesc, img: ['csharplogo.png']},
			    {name: "Java", id: "java", desc: javaDesc, img: ['javalogo.png']},
			    {name: "Objective-C", id: "objectivec", desc: objCDesc, img: ['objectiveCLogo.png']},
			    {name: "Python", id: "python", desc: pythonDesc, img: ['pythonLogo.png']}]},
		    {type: "Server Side", array: [
			    {name: "PHP", id: "php", desc: javaScriptDesc, img: ['php.png']},
			    {name: "Node.js", id: "nodejs", desc: javaScriptDesc, img: ['nodejsLogo.png']},
			    {name: "ASP.NET", id: "aspnet", desc: javaScriptDesc, img: ['aspnetLogo.png']}]},
		    {type: "Database", array: [
			    {name: "MongoDB", id: "mongodb", desc: javaScriptDesc, img: ['mongoDbLogo.png']},
			    {name: "MySQL", id: "mysql", desc: javaScriptDesc, img:['phpMySql.png']}]}
		];

		var mphelperDesc = "Music Production Helper's goal is to help music producers. The MPH plan is write as many creative, functional, and easy to use applications to help music producers learn what the need to know.";
		var decksDesc = "Decks is a sports game mobile app.  Each deck contains 8 cards with a pro-athlete and 2 stats on the font.  The player chooses a stat and swipes the card up or down for over or under. ";
		var chromaticWheelDesc="This application allows you to quickly vizulize your scales and chords on the Chromatic Wheel.";
		var tipLibDesc ="In order to become a better producer quickly, it is very important to collaborate with other producers to gain knowledge from each other.\n\
					The idea of the MPH Tip Library is to create a network of users that can create blog style tips or tutorials to help other users.\n\
					With a WYSIWIG editor it is very easy for producers to quickly create tips, upload images and share. Using AngularJs filtering, \n\
					users searching for a tip can quickly sort through the library to find what they are looking for. Users can save \n\
					tips to their profile for reference later, and comment on tips for collaboration. Users can view others profiles to check out the tips \n\
					they have submitted, liked, and how to find their music.";
		var profileDesc ="Your profile page displays the Tips you have saved, the tips you have submitted, as well as some other various statistics"
		$scope.projects = [{name:'mphelper.io',fullname:"Music Production Helper",url:"http://www.mphelper.io:3000",desc:mphelperDesc,apps:
								[{name:"ChromaticWheel",desc:chromaticWheelDesc,imgs:[{imageUrl:"cromaticWheelScale.PNG",header:"Visualize your scales",width:2},{imageUrl:"chromaticWheel.PNG",header:"Visualize your chords",width:2}]},
								 {name:"Tip Lib",desc:tipLibDesc,imgs:[{imageUrl:"AboutExampleEditView.PNG",header:"Editor",width:2},{imageUrl:"AboutExampleTipView.PNG",header:"Tip",width:2}]},
								 {name:"Profile", desc:profileDesc,imgs:[{imageUrl:"AboutExampleProfile.PNG",header:"",width:2}]}]},
				   {name:'Decks',fullname:"Decks Mobile App",url:"",desc:decksDesc,apps:
								[{name:"Game Play",imgs:[{imageUrl:"draymondSwipeDown.PNG",header:"",width:3},{imageUrl:"currySwipeUp.PNG",header:"",width:3},{imageUrl:"DurantGameView.PNG",header:"",width:3}]}]}
		];
		 
		
		$scope.navBarClick = function ($index) {
		    updateBody($index);
		    updateActive($index);
		}
		$scope.showBody = function ($index) {
		    if ($scope.navTitle == "About") {

		    }
		}
		var updateBody = function ($index) {
		    $scope.navTitle = $scope.navBarItems[$index].name;
		    $('html, body').animate({
			scrollTop: $('#' + $scope.navBarItems[$index].name + "Wrapper").offset().top - 40
		    }, 2000);
		}

		var updateActive = function ($index) {
		    for (var i = 0; i < $scope.navBarItems.length; i++) {
			if (i != $index) {
			    $scope.navBarItems[i].isActive = 0;
			}
			else {
			    $scope.navBarItems[i].isActive = 1;
			}
		    }
		}
		$(window).resize(function () {
		  
		    var stickyHeight = $('#stickyheader').height();
		    var stickyWidth = $('#stickyheader').width();
		    $(window).scroll(function () {
			if ($(window).scrollTop() > $scope.stickyHeaderTop) {
			    $('#stickyheader').css({position: 'fixed', top: '0px', height: stickyHeight,width:stickyWidth});
			    $('#stickyalias').css('display', 'block');
			    $('#stickyalias').css('height', stickyHeight + "px");
			} else {
			    $('#stickyheader').css({position: 'static', top: '0px',width:''});
			    $('#stickyalias').css('display', 'none');
			}
		    });
		});
		
		$(function () {
		    // Check the initial Poistion of the Sticky Header
		    $scope.stickyHeaderTop = $('#stickyheader').offset().top;
		    var stickyHeight = $('#stickyheader').height();
		    var stickyWidth = $('#stickyheader').width();
		    $(window).scroll(function () {
			if ($(window).scrollTop() > $scope.stickyHeaderTop) {
			    $('#stickyheader').css({position: 'fixed', top: '0px', height: stickyHeight,width:stickyWidth});
			    $('#stickyalias').css('display', 'block');
			    $('#stickyalias').css('height', stickyHeight + "px");
			} else {
			    $('#stickyheader').css({position: 'static', top: '0px',width:''});
			    $('#stickyalias').css('display', 'none');
			}
		    });
		});
		$scope.hoverLanguage = function (el) {
		    for (var s = 0; s < $scope.skills.length; s++) {
			for (var l = 0; l < $scope.skills[s].array.length; l++) {
			    $("#" + $scope.skills[s].array[l].id).removeClass('active');
			}
		    }
		    $("#" + el.id).addClass('active');
		    $scope.activelanguage = el;
		    $scope.skillsGridToggle = false;	    
		}
		
		$scope.hoverLanguageImg = function (el) {
		    for (var s = 0; s < $scope.skills.length; s++) {
			for (var l = 0; l < $scope.skills[s].array.length; l++) {
			    $("#" + $scope.skills[s].array[l].id).removeClass('active');
			}
		    }
		    $("#" + el.id).addClass('active');
		    $scope.activelanguage = el;	
		     $scope.skillsGridToggle = true;	
		}
		$scope.hoverSkillsLeave = function(){
		    $scope.skillsGridToggle = true;	
		}
		window.onload = function () {
		    // this will fire after the entire page is loaded, including images
		    $scope.hoverLanguage($scope.skills[0].array[0]);
		};
		$scope.showGrid = function(){
		     $scope.skillsGridToggle = true;
		 }
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function (data) {
			    $scope.todos = data;
			    $scope.loading = false;
			});
		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function () {

		    // validate the formData to make sure that something is there
		    // if form is empty, nothing will happen
		    if ($scope.formData.text != undefined) {
			$scope.loading = true;
			// call the create function from our service (returns a promise object)
			Todos.create($scope.formData)

				// if successful creation, call our get function to get all the new todos
				.success(function (data) {
				    $scope.loading = false;
				    $scope.formData = {}; // clear the form so our user is ready to enter another
				    $scope.todos = data; // assign our new list of todos
				});
		    }
		};
		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function (id) {
		    $scope.loading = true;
		    Todos.delete(id)
			    // if successful creation, call our get function to get all the new todos
			    .success(function (data) {
				$scope.loading = false;
				$scope.todos = data; // assign our new list of todos
			    });
		};
	    }]);
