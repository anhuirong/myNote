(function(){
	drawHcharts11();
	drawHcharts12();
	drawHcharts13();
	drawHcharts14();
	drawHcharts15();
	drawHcharts16();
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
			chart: {
				type: 'pie'
			},

			title: {
				text: 'Data input as column arrays'
			},

			data: {
				columns: [
					[null, 'Apples', 'Pears', 'Oranges'], // categories
					['Ola', 1, 4, 3], // first series
					['Kari', 5, 4, 2], // second series
					['ahr', 3, 2, 5] // third series
				]
			}
			});
	};
}
function drawHcharts15(){
	var chartId = $("#hchart15");

	if (chartId) {
		chartId.highcharts({
			title: {
				text: 'Global temperature change'
			},
			chart: {
				type: 'column'
			},
			data: {
				columns: [
					[null, 'Apples', 'Pears', 'Oranges'], // categories
					['Ola', 1, 4, 3], // first series
					['Kari', 5, 4, 2], // second series
					['ahr', 3, 2, 5] // third series
				],
				// csv: document.getElementById('csv').innerHTML,
				complete: function (options) {
					// Add another series to the output
					options.series.push({
						name: 'Trend',
						data: [2,6,4]
					});
				}
			}
		});
	};
}
function drawHcharts16(){
	var chartId = $("#hchart16");

	if (chartId){
		chartId.highcharts({
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},

			plotOptions: {
				series: {
					dataLabels: {
						align: 'left',
						enabled: true
					}
				}
			},

			series: [{
				data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
			}]
		});
	}
}