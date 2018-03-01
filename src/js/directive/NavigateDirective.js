function eshopNavCtrl() {
    const self = this;

    self.navs = [
        {
            text: '首页',
            actionName: 'home'
        },
        {
            text: '直播',
            actionName: 'live'
        },
        {
            text: '购物车',
            actionName: 'cart'
        }
    ];

    self.linkTo = function linkTo(actionName) {
        event.preventDefault();

        console.log(actionName);
        // $state.go()
    };
}
console.log(angular.module('eshopCtrl'));
function eshopNavRegister() {
    var directive = {
        bindToController: true,
        controller: eshopNavCtrl,
        controllerAs: 'eshopNavVm',
        restrict: 'A',
        scope: {
            content: '='
        },
        templateUrl: './src/view/eshopNav.html'
    };

    return directive
}

angular.module('eshopCtrl')
    .directive('eshopNav', eshopNavRegister);

