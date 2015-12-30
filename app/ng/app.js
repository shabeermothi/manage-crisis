'use strict';

/**
 * @ngdoc overview
 * @name managecrisisApp
 * @description
 * # managecrisisApp
 *
 * Main module of the application.
 */
angular
  .module('managecrisisApp', [
    'ngAnimate'
    ,'ngCookies'
    ,'ngMessages'
    ,'ngResource'
    ,'ngSanitize'
    ,'ngTouch'
    ,'ui.bootstrap'
    ,'ui.router'
    ,'uiGmapgoogle-maps'
    ,'mc.geo'
  ])
  .config(function ($urlRouterProvider, $stateProvider, uiGmapGoogleMapApiProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })
      .state('stories', {
        url: '/stories',
        templateUrl: 'views/stories.html'
      });

    // Angular Google Maps provider
    uiGmapGoogleMapApiProvider.configure({
      v: '3.20',
      libraries: 'weather,geometry,visualization'
    });
  });
