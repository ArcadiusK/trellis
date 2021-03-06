'use strict';

angular.module('trellisApp')
  .controller('NavbarCtrl', function ($scope, $location, $http, Auth, $state, userService) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/trellis'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

  });