
console.log('Hello world');

function ScorerController() {
    var vm = this;
    vm.players = [];

    vm.addPlayer = function(name) {
        console.log(name);
        vm.players.push(name);
        vm.playerName = "";
    }
}

const scorerTemplate = `
<p>Hello from the <em>component</em></p>
<form>
<input type="text" placeholder="Player name" ng-model="$ctrl.playerName">
<button ng-click="$ctrl.addPlayer($ctrl.playerName)">Add player</button>
</form>

<div class="player-data" ng-repeat="player in $ctrl.players">
<p>{{player}}</p>
</div>

<player name="name" ng-repeat="name in $ctrl.players"></player>
`;

function PlayerController() {
    var vm = this;
}

const playerTemplate = `
<div class="player-data">
<p>{{$ctrl.name}}</p>
</div>
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
    })
    .component('player', {
        restrict: 'E',
        template: playerTemplate,
        controller: PlayerController,
        bindings: {
            name: '<'
        }
    });
