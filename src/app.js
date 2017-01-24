
function ScorerController() {
    var vm = this;
    vm.players = [];

    vm.addPlayer = function (name) {
        console.log(name);
        vm.players.push({
            name: name,
            scores: []
        });
        vm.playerName = "";
    }

    vm.addScore = function (player, score) {
        console.log(player);
        console.log(score);
        player.scores.push(score);
    }
}

const scorerTemplate = `
<form>
<input type="text" placeholder="Player name" ng-model="$ctrl.playerName">
<button ng-click="$ctrl.addPlayer($ctrl.playerName)">Add player</button>
</form>

<player player="player" ng-repeat="player in $ctrl.players" on-add-score="$ctrl.addScore(player, score)"></player>
`;

function PlayerController() {
    var ctrl = this;
    ctrl.addScore = function() {
        console.log('Adding score');
        console.log(ctrl.score);
        console.log(ctrl.player);
        ctrl.onAddScore({player: ctrl.player, score: ctrl.score});
    }
}

const playerTemplate = `
<div class="player-data">
<h2>{{$ctrl.player.name}}</h2>
<form>
<input type="number" required ng-model="$ctrl.score">
<button ng-click="$ctrl.addScore($ctrl.player, $ctrl.score)">Add score</button>
</form>
<table>
    <thead>
        <tr>
            <th>Scores</th>
        </tr>
    </thead>

    <tbody>
        <tr ng-repeat="score in $ctrl.player.scores">
            <td>{{score}}</td>
        </tr>
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
            player: '<',
            onAddScore: '&'
        }
    });
