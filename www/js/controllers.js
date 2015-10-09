angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = [
    { title: 'Profile', id: 1 },
    { title: 'Favorite', id: 2 },
    { title: 'About', id: 3 },
    { title: 'Contact', id: 4 },
    { title: 'Help', id: 5 },
    { title: 'Logout', id: 6 }
  ];
})

.controller('SettingCtrl', function($scope, $stateParams) {
})

.controller('NewsfeedCtrl', function($scope) {
  $scope.newsfeed = {
    enableFriends: true
  };
});
