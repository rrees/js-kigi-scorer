
console.log('Hello world');

function ScorerController() {
    var vm = this;
    vm.players = [];
}

const scorerTemplate = `
<p>Hello from the <em>component</em></p>
`;

angular.module('app', [])
    .controller('MainCtrl', [function() {
        var vm = this;
        console.log('Main Controller created');
        this.message = "Hello from the controller";
    }])
    .component('scorer', {
        'restrict': 'E',
        'template': scorerTemplate,
        controller: ScorerController
    });
