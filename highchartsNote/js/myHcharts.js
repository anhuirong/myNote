(function(){
	drawHcharts11();
	drawHcharts12();
	drawHcharts13();
})();

function drawHcharts11(){
	var chartId = $("#hchart11");

	if (chartId) {
		chartId.highcharts({
			chart: {
				className: 'column'
			},
			title: {
				text: 'Monthly Average Temperature',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: WorldClimate.com',
				x: -20
			},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			yAxis: {
				title: {
					text: 'Temperature (°C)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: '°C'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Tokyo',
				data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				},
				{
					name: 'New York',
					data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
				},
				{
					name: 'Berlin',
					data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
				},
				{
					name: 'London',
					data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
		});
	};
}
function drawHcharts12(){
	var chartId = $("#hchart12");

	if (chartId) {
		chartId.highcharts({
			title: {
				text: null
			},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			yAxis: {
				title: {
					text: 'Temperature (°C)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: '°C'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Tokyo',
				data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				},
				{
					name: 'New York',
					data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
				},
				{
					name: 'Berlin',
					data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
				},
				{
					name: 'London',
					data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
		});
	};
}
function drawHcharts13(){
	var chartId = $("#hchart13");

	if (chartId) {
		chartId.highcharts({
			title: {
				text: null
			},
			credits: {
                enabled: false
            },
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			yAxis: {
				title: {
					text: 'Temperature (°C)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: '°C'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Tokyo',
				data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				},
				{
					name: 'New York',
					data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
				},
				{
					name: 'Berlin',
					data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
				},
				{
					name: 'London',
					data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
		});
	};
}
function drawHcharts14(){
	var chartId = $("#hchart14");

	if (chartId) {
		chartId.highcharts({
			title: {
				text: null
			},
			credits: {
                enabled: false
            },
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			yAxis: {
				title: {
					text: 'Temperature (°C)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: '°C'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Tokyo',
				data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				},
				{
					name: 'New York',
					data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
				},
				{
					name: 'Berlin',
					data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
				},
				{
					name: 'London',
					data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
		});
	};
}
function drawHcharts15(){
	var chartId = $("#hcharts15");

	if (chartId) {
		chartId.highcharts({
		       chart: {
		           type: 'column',
		           events: {
		               drilldown: function (e) {
		                   if (!e.seriesOptions) {

		                       var chart = this,
		                           drilldowns = {
		                               'Animals': {
		                                   name: 'Animals',
		                                   data: [
		                                       ['Cows', 2],
		                                       ['Sheep', 3]
		                                   ]
		                               },
		                               'Fruits': {
		                                   name: 'Fruits',
		                                   data: [
		                                       ['Apples', 5],
		                                       ['Oranges', 7],
		                                       ['Bananas', 2]
		                                   ]
		                               },
		                               'Cars': {
		                                   name: 'Cars',
		                                   data: [
		                                       ['Toyota', 1],
		                                       ['Volkswagen', 2],
		                                       ['Opel', 5]
		                                   ]
		                               }
		                           },
		                           series = drilldowns[e.point.name];

		                       // Show the loading label
		                       chart.showLoading('Simulating Ajax ...');

		                       setTimeout(function () {
		                           chart.hideLoading();
		                           chart.addSeriesAsDrilldown(e.point, series);
		                       }, 1000);
		                   }

		               }
		           }
		       },
		       title: {
		           text: 'Async drilldown'
		       },
		       xAxis: {
		           type: 'category'
		       },

		       legend: {
		           enabled: false
		       },

		       plotOptions: {
		           series: {
		               borderWidth: 0,
		               dataLabels: {
		                   enabled: true
		               }
		           }
		       },

		       series: [{
		           name: 'Things',
		           colorByPoint: true,
		           data: [{
		               name: 'Animals',
		               y: 5,
		               drilldown: true
		           }, {
		               name: 'Fruits',
		               y: 2,
		               drilldown: true
		           }, {
		               name: 'Cars',
		               y: 4,
		               drilldown: true
		           }]
		       }],

		       drilldown: {
		           series: []
		       }
		   });
	};
}