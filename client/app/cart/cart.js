'use strict';

angular.module('ecomApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cart', {
        title: 'Details of items in your shopping cart',
        url: '/cart',
        templateUrl: 'app/cart/cart.html'
        // controller: 'CartCtrl'
      });
  });
