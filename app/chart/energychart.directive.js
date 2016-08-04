/*app.directive('energyChart', function(){
	return {
      restrict: 'EA',
	  scope: {},
	  require: "ngModel",
      templateUrl:'app/chart/energychart.html'
	};
});*/

/*app.directive('selectDd', function(){
	return {
      	restrict: 'EA',
	  	require: "ngModel",
      	link:function(scope,element,attrs,ctrl){
			scope.$watch(function() {
            // $compile(element)(scope);
				if (scope.periodValue == 'monthly'){			
					scope.pastDate = scope.getPeriod(30);
				}
				if (scope.periodValue == 'quarterly'){
					scope.pastDate = scope.getPeriod(91);
				}
				else if (scope.periodValue == 'yearly'){
					scope.pastDate = scope.getPeriod(365);
				} 
				scope.showChart();				
			});			           
    	}
	};
});*/

var hcChart = function(){
	return {
		restrict: 'EA',
		template: '<div></div>',
		scope: {
			options: '='
		},
		link: function (scope, element, attrs) {
			//Highcharts.chart(element[0], scope.options);
			var chart;
			var process = function () {
				var defaultOptions = {
					chart: { renderTo: element[0] },
				};
				// Highcharts.chart(defaultOptions, scope.options);
				var config = angular.extend(defaultOptions, scope.options);
				chart = new Highcharts.Chart(config);
			};
			// process();
			scope.$watch("options.series", function () {
				process();
			});
		}
	};
};


/*var energyChart = function () {
	return {
		restrict: 'E',
		replace: true,
		template: '<div></div>',
		scope: {
			config: '='
		},
		link: function (scope, element, attrs) {
			var chart;
			var process = function () {
				var defaultOptions = {
					chart: { renderTo: element[0] },
				};
				var config = angular.extend(defaultOptions, scope.config);
				chart = new Highcharts.Chart(config);
			};
			process();
			scope.$watch("config.series", function (loading) {
				process();
			});
			scope.$watch("config.loading", function (loading) {
				if (!chart) {
					return;
				}
			});
		}
	};
};*/