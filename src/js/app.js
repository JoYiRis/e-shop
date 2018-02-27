var eshopCtrl = angular.module('eshopCtrl', ['ui.router']);

eshopCtrl.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state({
        controller: 'HelloController',
        name: 'hello',
        url: '/hello',
        templateUrl: './src/view/Hello.html'
    })
}]);