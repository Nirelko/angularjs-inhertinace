import angular from 'angular';

class BaseHomeController {
    constructor($scope) {
        this.$scope = $scope;

        this.$scope.first = 1;
    }

    coolFunction () {
        this.$scope.third = 3;
    }
}

angular.module('inhertinace')
    .controller(BaseHomeController.name, BaseHomeController)

export {BaseHomeController};
export default BaseHomeController.name;