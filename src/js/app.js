var eshopCtrl = angular.module('eshopCtrl', ['ui.router']);
console.log(eshopCtrl);
eshopCtrl.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state({
        controller: 'HelloCtrl as HelloCtrlVM',
        name: 'hello',
        url: '/hello',
        templateUrl: './src/view/Hello.html'
    })
}]);

