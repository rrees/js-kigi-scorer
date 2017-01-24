
function ScorerController() {
    var vm = this;
    vm.players = [];

    vm.addPlayer = function(name) {
        console.log(name);
        vm.players.push({name: name});
        vm.playerName = "";
    }
}

const scorerTemplate = `
<form>
<input type="text" placeholder="Player name" ng-model="$ctrl.playerName">
<button ng-click="$ctrl.addPlayer($ctrl.playerName)">Add player</button>
</form>

<player player="player" ng-repeat="player in $ctrl.players"></player>
`;

function PlayerController() {
    var vm = this;
}

const playerTemplate = `
<div class="player-data">
<h2>{{$ctrl.player.name}}</h2>
<table>
    <thead>
        <tr>
            <th>Scores</th>
        </tr>
    </thead>

    <tbody>
    </tbody>
</table>
</div>
`;

angular.module('app', [])
    .controller('MainCtrl', [function() {
        var vm = this;
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
            player: '<'
        }
    });
