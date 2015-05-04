
console.log('Hello world');

angular.module('app', [])
    .controller('MainCtrl', [function() {
        var vm = this;
        console.log('Main Controller created');
        this.message = "Hello from the controller";
    }]);
