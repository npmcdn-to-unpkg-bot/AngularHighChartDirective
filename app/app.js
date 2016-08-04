'use strict'; 
angular.module('myApp', [])
    .directive('hcchart', hcChart)
    .service('ChartService', ChartService)
    .controller('myController', myController);