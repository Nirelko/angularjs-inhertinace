import angular from 'angular';

import {BaseHomeController} from '../base-home/base-home.controller'

class HomeController extends BaseHomeController {
    constructor($scope) {
        super($scope);

        this.coolFunction();
    }

    coolFunction () {
        super.coolFunction();
        
        this.$scope.second = 2;
    }
}

angular.module('inhertinace')
    .controller(HomeController.name, HomeController)

export default HomeController.name;