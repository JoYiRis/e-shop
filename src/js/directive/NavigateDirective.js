function eshopNavCtrl($state) {
	const self = this;

	self.navs = [
	    {
	        text: '首页',
	        active: true,
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

	self.linkTo = function linkTo(row) {
	    event.preventDefault();

	    $state.go(row.actionName)
	};
}

function eshopNavRegister() {
	return {
		bindToController: true,
		controller: eshopNavCtrl,
		controllerAs: 'eshopNavVm',
		restrict: 'A',
		scope: {
			content: '='
		},
		templateUrl: './src/view/eshopNav.html'
	};
}

angular.module('eshopCtrl')
	.directive('eshopNav', eshopNavRegister);

