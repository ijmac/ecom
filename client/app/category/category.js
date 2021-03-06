'use strict';

angular.module('ecomApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        title: 'Add, Remove, Edit categories',
        url: '/category',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl',
        authenticate: true
      });
  });
