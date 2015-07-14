var app = angular.module('FlashCardApp', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('flashCardView',{
			url:'/',
			controller:'MainCtrl',
			templateUrl:'template/flashCard.html'
		})
		.state('newCardForm',{
			url:'/newCard',
			controller:'AddCard',
			templateUrl:'/template/newCard.html'
		})
		.state('statisticsPanel',{
			url:'/score',
			controller:'StatsController',
			templateUrl:'/template/statistics.html'
		})


})