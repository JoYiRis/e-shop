function HelloCtrl() {
    const self = this;

    self.textHTML = 'Main Controller injected success';
}

angular.module('eshopCtrl')
    .controller('HelloCtrl', HelloCtrl);

