angular
    .module('app', [ ])
    .controller("mainController", function($scope) {
        $scope.items = [
            {"name": "Will", "age": 30, "isSpecial": false},
            {"name": "Shawn", "age": 34, "isSpecial": false},
            {"name": "Laura", "age": 26, "isSpecial": true}
        ];

    });

