// 路径配置
// require.config({
//     paths: {
//         echarts: 'Public/Home/js'
//     }
// });
// var symbolType = ['circle','emptyRectangle','emptyTriangle','emptyDiamond','emptyHeart','emptyDroplet','emptyPin','emptyArrow','emptyStar','emptyStar3','emptyStar4','emptyStar5','emptyStar6'];
// var dataZoomStyle = {
// 		show: true,
// 		start : 70,
// 		y: document.getElementById('echart1').offsetHeight - 80,
// 		fillerColor: 'rgba(204,204,204,.2)',
// 		handleColor: 'rgba(255,255,255,.6)'
// 	},
// 	lineXAxisStyle = [
// 		{
// 			type : 'time',
// 			splitNumber: 10,
// 			axisLine: {
// 				show: true,
// 				lineStyle: {
// 					color: 'rgba(255,255,255,.5)',
// 					width: 1
// 				}
// 			},
// 			axisLabel: {
// 				margin: 16,
// 				textStyle: {
// 					color: '#fff'
// 				}
// 			},
// 			axisTick: {
// 				show: false
// 			},
// 			splitLine: {
// 				show: false
// 			}
// 		}
// 	],
// 	lineYAxisStyle = [
// 		{
// 			type : 'value',
// 			axisLine: {
// 				show: true,
// 				lineStyle: {
// 					color: 'rgba(255,255,255,.5)',
// 					width: 1
// 				}
// 			},
// 			axisLabel: {
// 				margin: 16,
// 				textStyle: {
// 					color: '#fff'
// 				}
// 			},
// 			axisTick: {
// 				show: false
// 			},
// 			splitLine: {
// 				show: true,
// 				lineStyle: {
// 					color: 'rgba(255,255,255,.2)',
// 					width: 1,
// 					type: 'dotted'
// 				}

// 			}
// 		}
// 	];
$(function(){
	changeByWindowChange();
	// JavaScript Document
	$('.pagenum').val(0); //标记当前页面是的id号
	$('.tag').val(0);  //滚动未完成前阻塞作用 1为阻塞中

	// 鼠标滚动时触发的事件
	$('.a-data-box').mousewheel(function(event, delta) {
		var abstract=$('.tag').val();
		if (abstract == 1){
			return;
		}
		scrollWholeDom(delta);
	});

	$('.trends-point>li').eq(0).addClass('active');
	// 点击右侧栏目的事件
	$('.trends-point>li').click(function(){
		var b = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.tag').val(1);
		$('.pagenum').val(-b);

		var single_hh = $(".a-content").height();
		click_hh = single_hh*b;
		$('.a-data-box').animate({'bottom': click_hh},1000);
		setTimeout(function(){
			$('.tag').val(0);
			setDataForDom(b);
		},1000);
	});

	// changeByWindowChange();

	// 窗口变化触发的事件
	$(window).resize(function(){
		if (typeof indexSlides != 'undefined' && indexSlides.reformat)
			indexSlides.reformat();
			changeByWindowChange();
	});

	// 选定按钮事件
	$(".a-trends").on("click","a.a-selected",function(){
		var _this = $(this);
		var status = _this.attr('data-selected');
		var hideInfo = _this.parents("tr").eq(0).find("input[name='trends']").eq(0);
		var title = decodeURIComponent($.trim(hideInfo.attr('data-title')));
		var param = {
				ClusterId0 : hideInfo.attr('data-cid0'),
				ClusterId4 : hideInfo.attr('data-cid4'),
				datestr : hideInfo.attr('data-datestr'),
				title: title,
				kind : 1,
				status : status,
				id : hideInfo.attr('data-id')
			}
		M.tool.fnAjax({
			url : 'index.php?s=/home/api/selected',
			data : param,
			beforeSendCallback: function(){
				$("#loading").show();
			},
			successCallback : function(response){
				if (response) {
					var dataJson = jQuery.parseJSON(response);
					if (dataJson.result) {
						if (parseInt(status) === 1) {
							_this.attr('data-selected', '0');
							_this.attr('class', 'btn btn-default btn-sm a-selected');
							_this.text('已 选');
						} else {
							_this.attr('data-selected', '1');
							_this.attr('class', 'btn btn-primary btn-sm a-selected');
							_this.text('选 定');
						};
						promptTip(dataJson.message);
					}else{
						promptTip(dataJson.message);
					};
				}else{
					promptTip('无数据');
				};
			},
			errorSendCallback: function(){
				promptTip('网络错误，请稍后重试！');
			},
			completeCallback : function(){
				$("#loading").hide();
			}
		});
	});

	// 收藏按钮事件
	$(".a-trends").on("click","a.a-star",function(){
		var _this = $(this);
		var status = _this.attr('data-collected');
		var hideInfo = _this.parents("tr").eq(0).find("input[name='trends']").eq(0);
		var title = decodeURIComponent($.trim(hideInfo.attr('data-title')));
		var param = {
				ClusterId0 : hideInfo.attr('data-cid0'),
				ClusterId4 : hideInfo.attr('data-cid4'),
				datestr : hideInfo.attr('data-datestr'),
				title: title,
				kind : 1,
				status : status,
				id : hideInfo.attr('data-id')
			}
		M.tool.fnAjax({
			url : 'index.php?s=/home/api/collected',
			data : param,
			beforeSendCallback: function(){
				$("#loading").show();
			},
			successCallback : function(response){
				if (response) {
					var dataJson = jQuery.parseJSON(response);
					if (dataJson.result) {
						if (parseInt(status) === 1) {
							_this.html('<i class="glyphicon glyphicon-star a-icon-star-light"></i>');
							_this.attr('data-collected','0');
						} else {
							_this.html('<i class="glyphicon glyphicon-star a-icon-star"></i>');
							_this.attr('data-collected','1');
						};
						// promptTip(dataJson.message);
					}else{
						promptTip(dataJson.message);
					};
				}else{
					promptTip('无数据');
				};
			},
			errorSendCallback: function(){
				promptTip('网络错误，请稍后重试！');
			},
			completeCallback : function(){
				$("#loading").hide();
			}
		});
	});
});
// 用户访问量数据调整
// function changeNum (argument) {
// 	return parseInt(argument)*23
// }

// 板块切换的事件处理
function scrollWholeDom(a){
	// a为滚动方向, -1向下滚动 ，1向上滚动
	// console.log(a);
	var z =$('.pagenum').val();
    b = parseInt(z);//当前页面id
	c = $('.a-cell').length;//总共页面数

	if(a<0){
		//向下
		if(-b==c-1){
			return;
		}
		b-=1;
		$('.tag').val(1);
	}else if(a>0){
		//向上
		if(-b==0){
			return;
		}
		b+=1;
		$('.tag').val(1);
	}

	// console.log(parseInt(b));
	var single_hh = $(".a-content").height();
	click_hh = -single_hh*b;
	$('.a-data-box').animate({'bottom': click_hh},1000);
	$('.pagenum').val(b);
	$('.trends-point>li').eq(-b).addClass('active').siblings('li').removeClass('active');
	setTimeout(function(){
		$('.tag').val(0);
		setDataForDom(-b);
	},1000);
}

// 窗口变换处理
function changeByWindowChange(){
	var single_hh = $(".a-content").height();
	var single_ww = $(".a-content").width();
	$('.a-cell').height(single_hh);
	$('.a-cell').width(single_ww);
	chart = [{},{},{},{},{},{}];
	scrollWholeDom(0);
}

// 为chart设置数据
function setDataForDom(index){
	// console.log(index);
	if (!jageObjNull(chart[parseInt(index+1)])) {
		// console.log(index);
		switch (parseInt(index+1)){
			// case 0: setDataForChart0();break;
			// case 1: setDataForChart1();break;
			// case 2: setDataForChart2();break;
			// case 3: setDataForChart3();break;
			// case 4: setDataForChart4();break;
			// case 5: setDataForChart5();break;
			// case 6: setDataForChart6();break;
			// case 7: setDataForChart7();break;
		}
	};
}

// 趋势
function setDataForChart1(){
	require(
	[
		'echarts',
		'echarts/chart/line'
	],function (ec){
		chart[1] = {
			title : {
				show: false
			},
			// color: ['#ec1e33','#97b553']
			grid: {
				borderWidth: 0,
				x: 100,
				y: 10,
				y2: 150
			},
			tooltip : {
				trigger: 'item',
				formatter : function (params) {
					// console.log("paramsparamsparamsparamsparams");
					// console.log(params);
					var date = new Date(params.value[0]);
					data = date.getFullYear() + '-'
							+ (date.getMonth() + 1) + '-'
							+ date.getDate();
					var numSplit = String(params.value[1]).split("").reverse().join("").replace(/(\d{3})(?=[^$])/g, "$1,").split("").reverse().join("");
					return '全国 : ' + data + '<br/>' + 
							params.seriesName + ' : ' + numSplit + (String(params.seriesName) == '用户访问量' ? ' 次' : ' 篇')
				}
			},
			dataZoom: dataZoomStyle,
			legend : {
				y: 'bottom',
				data : ['用户访问量','媒体报道量'],
				textStyle: {
					color: '#fff'
				},
				itemGap: 50,
				selectedMode: 'single',
				selected: {
					'媒体报道量': false
				}
			},
			xAxis : lineXAxisStyle,
			yAxis : lineYAxisStyle,
			series : [
				{
					name: '用户访问量',
					type: 'line',
					showAllSymbol: true,
					symbol: 'emptyCircle',
					symbolSize: 6,
					smooth: true,
					itemStyle: {
						normal: {
							color: 'rgba(236,30,51,1)',
							lineStyle: {
								width: 4
							},
							areaStyle: {
								type: 'default',
								color: 'rgba(236,30,51,0.1)'
							}
						}
					},
					data: []
				},
				{
					name: '媒体报道量',
					type: 'line',
					showAllSymbol: true,
					symbol: 'emptyCircle',
					symbolSize: 6,
					smooth: true,
					itemStyle: {
						color: 'rgba(0,132,234,1)',
						normal: {
							lineStyle: {
								width: 4
							},
							areaStyle: {
								type: 'default',
								color: 'rgba(0,132,234,.1)'
							}
						}
					},
					data: []
				}
			]
		}
		// console.log(trend_chart);
		if (trend_chart.result == 1 && trend_chart.data && trend_chart.data.length != 0) {
			var dataList = trend_chart.data;
			for (var i = 0; i < dataList.length; i++) {
				dataList[i].datestr;
				chart[1].series[0].data.push([
					new Date(dataList[i].datestr.replace(/-/ig,'/')),
					parseInt(changeNum(dataList[i].pv))
				]);
				chart[1].series[1].data.push([
					new Date(dataList[i].datestr.replace(/-/ig,'/')),
					Number(dataList[i].num)
				]);
			};
		};
		ec.init(document.getElementById('echart1')).setOption(chart[1]).on('click',function(res){
			$("#toggleTable").modal();
			$("#toggleTable").find('.loading').eq(0).show();
			$("#toggleTable").find('.modal-dialog').hide();
			// console.log(res);
			var url = 'index.php?s=/home/api/trend_data',
				datestr = String(res.data[0].getFullYear())+'-'+String(res.data[0].getMonth()+1)+'-'+String(res.data[0].getDate()),
				type = res.seriesName === '媒体报道量' ? 'num' : 'pv',
				// title = '全国' + (String(res.seriesName)==="新闻量"? "新闻热度":"新闻访问量") + '排行',
				title = String(res.seriesName) + '排行',
				moreUrl = 'index.php?s=/Home/trend/pvlist&type=' + type + '&datestr=' + datestr,
				params = {
					title: title,
					moreUrl: moreUrl,
					url: url,
					data: {datestr:datestr,type:type}
				};
			getDataFromServer(params);
		});
	});
}

// 地域
function setDataForChart2(){
	require(
	[
		'echarts',
		'echarts/chart/map'
	],function (ec){
		chart[2] = {
			timeline: {
				data: [],
				x: '35%',
				y: 0,
				width: '25%',
				// autoPlay : true,
				// loop: false,
				// playInterval : 2000,
				controlPosition: 'none',
				lineStyle: {
					color: '#fff'
				},
				label: {
					textStyle: {
						color: '#fff'
					}
				},
				currentIndex: 4
			},
			options: []
		};

		if (trend_area.result === 1 && trend_area.data.length != 0) {
			console.log("************************************");
			console.log(trend_area);
			for (var i = 0; i < trend_area.data.length; i++) {
				var item = trend_area.data[i];
				chart[2].timeline.data.push({
					name: String(item.datestr),
					symbol: symbolType[i]
				});
				chart[2].options.push({
					title : {
						show: false
					},
					tooltip : {
						trigger: 'item',
						// formatter: '{b} <br />{a} : {c}'
						formatter: function (params) {
							var strs = JSON.stringify(cities);
							isCity = RegExp(String(params.name)).test(strs);
							var numSplit = String(params.value).split("").reverse().join("").replace(/(\d{3})(?=[^$])/g, "$1,").split("").reverse().join("");
							if (!isCity) {
								return params.name + ' : ' + params.data.datestr + '<br>' + params.seriesName + ' : ' + numSplit + ' 次';
							} else {
								return null;
							}
						}
					},
					dataRange: {
						show: false,
						min: 0,
						max: changeNum(200000),
						calculable : true,
						color: ['#ff3333','#1e90ff', '#f0ffff']
					},
					series : [
						{
							name: '用户访问量',
							type: 'map',
							mapType: 'china',
							itemStyle:{
								normal:{label:{show:true}},
								emphasis:{label:{show:true}}
							},
							geoCoord: cities,
							markPoint: {
								clickable: false,
								hoverable: false,
								symbol: 'emptyCircle',
								symbolSize: 10,
								effect: {
									show: true,
									shadowBlur: 0,
									// color: '#FF4C4C'
								},
								itemStyle:{
									normal:{
										label:{
											show:false
										}
									},
									emphasis: {
										label: {
											show: false
										}
									}
								},
								data: []
							},
							data:[]
						}
					]
				});
				if (item.data.length != 0) {
					for (var j = 0; j < item.data.length; j++) {
						var itemCell = item.data[j];
						var province = replaceProvinceName(itemCell.province);
						var capital = replaceProvincialCapital(itemCell.province);
						chart[2].options[i].series[0].data.push({
							name: String(province),
							value: Number(changeNum(itemCell.num)),
							id: String(itemCell.province),
							datestr: String(item.datestr)
						});
						if (j<4) {
							chart[2].options[i].series[0].markPoint.data.push({
								name: String(capital),
								value: Number(changeNum(itemCell.num))*3
							})
						};
					};
				};

			};
		};
		// console.log(chart[2]);

		ec.init(document.getElementById('echart2')).setOption(chart[2]).on('click',function(res){
			// console.log(res);
			$("#toggleTable").modal();
			$("#toggleTable").find('.loading').eq(0).show();
			$("#toggleTable").find('.modal-dialog').hide();
			var url = 'index.php?s=/Home/api/trend_area_five',
				datestr = res.data.datestr,
				state = res.data.id,
				title = String(res.name) + '用户访问量排行',
				moreUrl = 'index.php?s=/Home/trend/arealist&state=' + state + '&datestr=' + datestr,
				params = {
					title: title,
					moreUrl: moreUrl,
					url: url,
					data: {datestr:datestr,state:state}
				};
			getDataFromServer(params);
		});
	});
}

// 类型
function setDataForChart3(){
	require(
	[
		'echarts',
		'echarts/chart/pie'
	],function (ec){
		chart[3] = {
			timeline: {
				data: [],
				x: '35%',
				y: 0,
				width: '30%',
				// autoPlay : true,
				// loop: false,
				// playInterval : 2000,
				controlPosition: 'none',
				lineStyle: {
					color: '#fff'
				},
				label: {
					textStyle: {
						color: '#fff'
					}
				},
				currentIndex: 4
			},
			options: []
		};

		// console.log(trend_pie);
		if (trend_pie.result === 1 && trend_pie.data && trend_pie.data.length != 0) {
			for (var i = 0; i < trend_pie.data.length; i++) {
				var item = trend_pie.data[i];
				// console.log(item);
				chart[3].timeline.data.push({
					name: String(item.datestr),
					symbol: symbolType[i]
				});
				chart[3].options.push({
					tooltip : {
						show: true,
						// formatter: "{b} <br/>{a} : {c}"
						formatter: function(params){
							// console.log(params);
							if (String(params.value).length != 0) {
								var numSplit = String(params.value).split("").reverse().join("").replace(/(\d{3})(?=[^$])/g, "$1,").split("").reverse().join("");
								return params.name + ' : ' + params.data.datestr + '<br>' + params.seriesName + ' : ' + numSplit + (String(params.seriesName) == '用户访问量' ? ' 次' : ' 篇');
							} else {
								return null;
							};
						}
					},
					legend: {
						x: 'center',
						y: 'bottom',
						data:[],
						textStyle: {
							color: '#fff'
						},
						itemGap: 15
					},
					// calculable : true,
					series : [
						{
							name:'媒体报道量',
							type:'pie',
							center : ['25%', '45%'],
							radius : ['40%', '70%'],
							itemStyle : {
								normal : {
									label : {
										// position : 'inner'
										show: false
									},
									labelLine : {
										show : false
									}
								},
								emphasis : {
									label : {
										show : false,
										formatter : "{b}\n{d}%"
									}
								}
							},
							markPoint: {
								clickable: false,
								symbol: 'emptyCircle',
								symbolSize: 10,
								itemStyle: {
									normal: {
										color: 'rgba(255,255,255,0)',
										label: {
											textStyle: {
												fontSize: 30,
												color: '#fff',
												fontWeight: 'bold'
											},
											formatter: '{a}'
										}
									},
									emphasis: {
										formatter: null
									}
								},
								data: [
									{name: '媒体报道量', x: '25%', y: '45%',textStyle: {color: '#fff'}}
								]
							},
							clickable: true,
							data:[]
						},
						{
							name:'用户访问量',
							type:'pie',
							center : ['70%', '45%'],
							radius : ["40%", '70%'],
							itemStyle : {
								normal : {
									label : {
										// position : 'inner'
										show: false
									},
									labelLine : {
										show : false
									}
								},
								emphasis : {
									label : {
										show : false,
										formatter : "{b}\n{d}%"
									}
								}
							},
							markPoint: {
								clickable: false,
								symbol: 'emptyCircle',
								symbolSize: 10,
								itemStyle: {
									normal: {
										color: 'rgba(255,255,255,0)',
										label: {
											textStyle: {
												fontSize: 30,
												color: '#fff',
												fontWeight: 'bold'
											},
											formatter: '{a}'
										}
									},
									emphasis: {
										formatter: null
									}
								},
								data: [
									{name: '用户访问量', x: '70%', y: '45%',textStyle: {color: '#fff'}}
								]
							},
							clickable: true,
							data:[]
						}
					]
				});
				var num = item.catergray_num;
				var pv = item.catergray_pv;
				for(var itemcell in num){
					var classifyName = replaceCategory(String(itemcell));
					classifyName = String(classifyName) === '国内' ? '政治社会' : classifyName;
					if (!(String(classifyName) === '其他' || String(classifyName) === '社会')) {
						chart[3].options[i].series[0].data.push({
							name: classifyName,
							value: parseInt(num[itemcell]),
							id: String(itemcell),
							datestr: String(item.datestr)
						});
						chart[3].options[i].series[1].data.push({
							name: classifyName,
							value: Number(changeNum(pv[itemcell])),
							id: String(itemcell),
							datestr: String(item.datestr)
						});
						chart[3].options[i].legend.data.push(classifyName);
					};
				}
			};
		};

		// console.log(chart[3]);

		ec.init(document.getElementById('echart3')).setOption(chart[3]).on('click',function(res){
			console.log(res);
			$("#toggleTable").modal();
			$("#toggleTable").find('.loading').eq(0).show();
			$("#toggleTable").find('.modal-dialog').hide();
			var url = 'index.php?s=/home/api/trend_type_pie_five',
				datestr = res.data.datestr,
				type = res.seriesName === '媒体报道量' ? 'num' : 'pv',
				encate = String(res.data.id),
				// title = String(res.name) + (String(res.seriesName)==="媒体报道量"?"新闻热度":"新闻访问量") + '排行',
				title = String(res.name) + '-' + String(res.seriesName) + '排行',
				moreUrl = "index.php?s=/Home/trend/typepie&type="+type+"&datestr="+datestr+"&encate="+ encate,
				params = {
					title: title,
					moreUrl: moreUrl,
					url: url,
					data: {type:type,encate:encate,datestr:datestr}
				};
			getDataFromServer(params);
		});
	});
}

// 类型趋势
function setDataForChart4(){
	require(
	[
		'echarts',
		'echarts/chart/line'
	],function (ec){
		chart[4] = {
			title : {
				text : ''
			},
			grid: {
				borderWidth: 0,
				x: 100,
				y: 10,
				y2: 150
			},
			tooltip : {
				trigger: 'item',
				formatter : function (params) {
					// console.log(params);
					var date = new Date(params.value[0]);
					data = date.getFullYear() + '-'
							+ (date.getMonth() + 1) + '-'
							+ date.getDate();
					var numSplit = String(params.value[1]).split("").reverse().join("").replace(/(\d{3})(?=[^$])/g, "$1,").split("").reverse().join("");
					return params.seriesName + '：' + data + '<br/>'
							+'用户访问量：'+ numSplit + ' 次'
				}
			},
			dataZoom: dataZoomStyle,
			legend : {
				x: 'center',
				y: 'bottom',
				data : ['政治社会','娱乐','生活','汽车','商业','教育','游戏','健康','军事','房产','科技','体育','其他','国外'],
				textStyle: {
					color: '#fff'
				},
				itemGap: 15,
				selected: {
					'汽车' : false,
					'商业' : false,
					'教育' : false,
					'游戏' : false,
					'健康' : false,
					// '生活' : false,
					'军事' : false,
					'房产' : false,
					'科技' : false,
					'体育' : false,
					'其他' : false,
					'国外' : false
				}
			},
			xAxis : lineXAxisStyle,
			yAxis : lineYAxisStyle,
			series : [{
					name: '政治社会',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '娱乐',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '生活',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '汽车',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					data: []
				},{
					name: '商业',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					data: []
				},{
					name: '教育',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '游戏',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '健康',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '军事',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '房产',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '科技',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '体育',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '其他',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				},{
					name: '国外',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					legendHoverLink: false,
					data: []
				}
			]
		}

		if (trend_line.result == 1 && trend_line.data && trend_line.data.length != 0) {
			var dataList = trend_line.data;
			for (var i = 0; i < dataList.length; i++) {
				// dataList[i].datestr;
				chart[4].series[0].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_China||0)),'rt_China']);
				// chart[4].series[1].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Society||0)),'rt_Society']);
				chart[4].series[1].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Entertainment||0)),'rt_Entertainment']);
				chart[4].series[2].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Auto||0)),'rt_Auto']);
				chart[4].series[3].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Business||0)),'rt_Business']);
				chart[4].series[4].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Education||0)),'rt_Education']);
				chart[4].series[5].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Games||0)),'rt_Games']);
				chart[4].series[6].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Health||0)),'rt_Health']);
				chart[4].series[7].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_LifeStyle||0)),'rt_LifeStyle']);
				chart[4].series[8].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Military||0)),'rt_Military']);
				chart[4].series[9].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_RealEstate||0)),'rt_RealEstate']);
				chart[4].series[10].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_ScienceAndTechnology||0)),'rt_ScienceAndTechnology']);
				chart[4].series[11].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Sports||0)),'rt_Sports']);
				chart[4].series[12].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_Unclassified||0)),'rt_Unclassified']);
				chart[4].series[13].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),Number(changeNum(dataList[i].rt_World||0)),'rt_World']);
			};
		};
		// console.log(chart[4]);

		ec.init(document.getElementById('echart4')).setOption(chart[4]).on('click',function(res){
			// console.log(res);
			$("#toggleTable").modal();
			$("#toggleTable").find('.loading').eq(0).show();
			$("#toggleTable").find('.modal-dialog').hide();
			var url = 'index.php?s=/home/api/trend_type_line',
				datestr = String(res.data[0].getFullYear())+'-'+String(res.data[0].getMonth()+1)+'-'+String(res.data[0].getDate()),
				encate = String(res.data[2]),
				title = String(res.seriesName) + '-' + '用户访问量排行',
				moreUrl = "index.php?s=/Home/trend/typeline&datestr="+datestr+"&encate="+encate,
				params = {
					title: title,
					moreUrl: moreUrl,
					url: url,
					data: {datestr:datestr,encate:encate}
				};
			getDataFromServer(params);
		});
	});
}

// 人群
function setDataForChart5(){
	require(
	[
		'echarts',
		'echarts/chart/pie'
	],function (ec){
		var placeHolderStyle = {
			normal : {
				color: 'rgba(204,204,204,.6)',
				label: {show:false},
				labelLine: {show:false}
			},
			emphasis : {
				color: 'rgba(0,0,0,0)'
			}
		};
		var color = ['#da70d6','#97b553','#3ed68d','#3ed68d','#f4dd1b','#ff7f50','#97b553','#da70d6','#3ed68d']
		chart[5] = {
			timeline: {
				data: [],
				x: '35%',
				y: 0,
				width: '30%',
				// autoPlay : true,
				// loop: false,
				// playInterval : 2000,
				controlPosition: 'none',
				lineStyle: {
					color: '#fff'
				},
				label: {
					textStyle: {
						color: '#fff'
					}
				},
				currentIndex: 4
			},
			options: []
		};

		if (trend_gender_age.result == 1 && trend_gender_age.data && trend_gender_age.data.length != 0) {
			for (var i = 0; i < trend_gender_age.data.length; i++) {
				var item = trend_gender_age.data[i];
				if (item.agegroup.length == 0 && item.gender.length == 0) {
					continue;
				}
				chart[5].timeline.data.push({
					name: String(item.datestr),
					symbol: symbolType[i]
				});
				chart[5].options.push({
					color: color,
					tooltip : {
						show: true,
						formatter: function (params) {
							if (String(params.name).length != 0) {
							// console.log(params);
								return  params.name + ' : ' + params.data.datestr + '<br>' + '用户访问量 : ' + params.percent + '%';
							} else {
								return null;
							};
						}
					},
					legend: {
						show: false,
						data:['女性','男性','小于18','[18,25)','[25,35)','[35,50)','大于等于50']
					},
					series : [
						{
							name:'性别',
							type:'pie',
							clockWise:false,
							center: ['25%','45%'],
							radius : ['55%', '70%'],
							itemStyle : {
								normal : {
									label : {
										position : 'inner',
										formatter : '{b}'
									},
									labelLine : {
										show : false
									}
								},
								emphasis : {
									label : {
										show : true,
										position : 'inner',
										formatter : "{b}"
									}
								}
							},
							markPoint: {
								clickable: false,
								symbol: 'emptyCircle',
								symbolSize: 10,
								itemStyle: {
									normal: {
										color: 'rgba(255,255,255,0)',
										label: {
											textStyle: {
												fontSize: 30,
												color: '#fff',
												fontWeight: 'bold'
											},
											formatter: '{a}'
										}
									}
								},
								data: [
									{x: '25%', y: '45%',textStyle: {color: '#fff'}}
								]
							},
							data:[
								{
									value: item.gender.female,
									name:'女性',
									id: 'female',
									datestr: item.datestr
								},
								{
									value: item.gender.male,
									name:'',
									itemStyle : placeHolderStyle
								}
							]
						},
						{
							name:'性别',
							type:'pie',
							clockWise:false,
							center: ['25%','45%'],
							radius : ['40%', '55%'],
							itemStyle : {
								normal : {
									label : {
										position : 'inner',
										formatter : '{b}'
									},
									labelLine : {
										show : false
									}
								},
								emphasis : {
									label : {
										show : true,
										position : 'inner',
										formatter : "{b}"
									}
								}
							},
							data:[
								{
									value: item.gender.male,
									name:'男性',
									id: 'male',
									datestr: item.datestr
								},
								{
									value: item.gender.female,
									name:'',
									itemStyle : placeHolderStyle
								}
							]
						},
						{
							name:'年龄',
							type:'pie',
							center : ['75%', '45%'],
							radius : [50, '70%'],
							roseType : 'radius',
							width: '40%',       // for funnel
							max: 40,            // for funnel
							itemStyle : {
								normal : {
									label : {
										position : 'inner',
										formatter : '{b}'
									},
									labelLine : {
										show : false
									}
								},
								emphasis : {
									label : {
										show : true,
										position : 'inner',
										formatter : "{b}"
									}
								}
							},
							markPoint: {
								clickable: false,
								symbol: 'emptyCircle',
								symbolSize: 10,
								itemStyle: {
									normal: {
										color: 'rgba(255,255,255,0)',
										label: {
											textStyle: {
												fontSize: 30,
												color: '#fff',
												fontWeight: 'bold'
											},
											formatter: '{a}'
										}
									}
								},
								data: [
									{x: '75%', y: '45%',textStyle: {color: '#fff'}}
								]
							},
							data:[
								{name: '小于18岁',value: parseInt(item.agegroup.less18),id: 'less18',datestr: item.datestr},
								{name: '[18,25)岁',value: parseInt(item.agegroup.less25),id: 'less25',datestr: item.datestr},
								{name: '[25,35)岁',value: parseInt(item.agegroup.less35),id: 'less35',datestr: item.datestr},
								{name: '[35,50)岁',value: parseInt(item.agegroup.less50),id: 'less50',datestr: item.datestr},
								{name: '大于等于50岁',value: parseInt(item.agegroup.more50),id: 'more50',datestr: item.datestr}
							]
						}
					]
				});
			};
		};

		ec.init(document.getElementById('echart5')).setOption(chart[5]).on('click',function(res){
			// console.log(res);
			var url = 'index.php?s=/home/api/trend_gender_age_five',
				datestr = String(res.data.datestr||''),
				type = String(res.data.id||''),
				title = String(res.name) + '用户访问量排行',
				moreUrl = 'index.php?s=/Home/trend/gender_age&type='+type,
				params = {
					title: title,
					moreUrl: moreUrl,
					url: url,
					data: {datestr:datestr,type:type}
				};
			if (params.data.datestr.length != 0 && params.data.type.length != 0) {
				$("#toggleTable").modal();
				$("#toggleTable").find('.loading').eq(0).show();
				$("#toggleTable").find('.modal-dialog').hide();
				getDataFromServer(params);
			};
		});
	});
}

// 情感
function setDataForChart6(){
	require(
	[
		'echarts',
		'echarts/chart/pie'
	],function (ec){
		// console.log(emotion_pie);
		if (emotion_pie.result == 1 && emotion_pie.data) {
			var dataStyle = {
				normal : {
					label : {
						position : 'inner'
					},
					labelLine : {
						show : false
					}
				},
				emphasis : {
					label : {
						show: true,
						position : 'inner'
					}
				}
			};
			var placeHolderStyle = {
				normal : {
					color: 'rgba(0,0,0,0)',
					label: {show:false},
					labelLine: {show:false}
				},
				emphasis : {
					color: 'rgba(0,0,0,0)'
				}
			};
			chart[6] = {
				timeline: {
					data: [],
					x: '35%',
					y: 0,
					width: '30%',
					// autoPlay : true,
					// loop: false,
					// playInterval : 2000,
					controlPosition: 'none',
					lineStyle: {
						color: '#fff'
					},
					label: {
						textStyle: {
							color: '#fff'
						}
					},
					currentIndex: 4
				},
				options: []
			};
			// console.log(emotion_pie);
			if (emotion_pie.result == 1 && emotion_pie.data && emotion_pie.data.length != 0) {
				for (var i = 0; i < emotion_pie.data.length; i++) {
					var item = emotion_pie.data[i],num = item.emotion_num,pv = item.emotion_pv;
					chart[6].timeline.data.push({
						name: String(item.datestr),
						symbol: symbolType[i]
					});
					chart[6].options.push({
						tooltip : {
							show: true,
							formatter: function (params) {
								if (String(params.name).length != 0) {
									return params.name + ' : ' + params.data.datestr + '<br>' + params.seriesName + ' : ' + params.percent + '%';
								} else {
									return null;
								};
							}
						},
						legend: {
							show: false,
							data:['新闻量-负面新闻','新闻量-正面新闻','新闻量-中立新闻','访问量-负面新闻','访问量-正面新闻','访问量-中立新闻']
						},
						series : [
							{
								name:'媒体报道量',
								type:'pie',
								clockWise:false,
								center: ['25%','45%'],
								radius : ['60%', '70%'],
								itemStyle : dataStyle,
								data:[
									{
										value: num.negative_num||0,
										name: '负面新闻',
										id: 'negative_num',
										datestr: item.datestr
									},
									{
										value: num.neutrality_num||0,
										name: '',
										itemStyle : placeHolderStyle
									},
									{
										value: num.positive_num||0,
										name: '',
										itemStyle : placeHolderStyle
									}
								]
							},
							{
								name:'媒体报道量',
								type:'pie',
								clockWise:false,
								center: ['25%','45%'],
								radius : ['50%', '60%'],
								itemStyle : dataStyle,
								data:[
									{
										value: num.positive_num||0,
										name: '正面新闻',
										id: 'positive_num',
										datestr: item.datestr
									},
									{
										value: num.negative_num||0,
										name: '',
										itemStyle : placeHolderStyle
									},
									{
										value: num.neutrality_num||0,
										name: '',
										itemStyle : placeHolderStyle
									}
								]
							},
							{
								name:'媒体报道量',
								type:'pie',
								clockWise:false,
								center: ['25%','45%'],
								radius : ['40%', '50%'],
								itemStyle : dataStyle,
								data:[
									{
										value: num.neutrality_num||0,
										name: '中立新闻',
										id: 'neutrality_num',
										datestr: item.datestr
									},
									{
										value: num.negative_num||0,
										name: '',
										itemStyle : placeHolderStyle
									},
									{
										value: num.positive_num||0,
										name: '',
										itemStyle : placeHolderStyle
									}
								]
							},
							{
								name:'用户访问量',
								type:'pie',
								clockWise:false,
								center: ['75%','45%'],
								radius : ['60%', '70%'],
								itemStyle : dataStyle,
								data:[
									{
										value: pv.negative_pv||0,
										name: '负面新闻',
										id: 'negative_pv',
										datestr: item.datestr
									},
									{
										value: pv.neutrality_pv||0,
										name: '',
										itemStyle : placeHolderStyle
									},
									{
										value: pv.positive_pv||0,
										name: '',
										itemStyle : placeHolderStyle
									}
								]
							},
							{
								name:'用户访问量',
								type:'pie',
								clockWise:false,
								center: ['75%','45%'],
								radius : ['50%', '60%'],
								itemStyle : dataStyle,
								data:[
									{
										value: pv.positive_pv||0,
										name: '正面新闻',
										id: 'positive_pv',
										datestr: item.datestr
									},
									{
										value: pv.neutrality_pv||0,
										name: '',
										itemStyle : placeHolderStyle
									},
									{
										value: pv.negative_pv||0,
										name: '',
										itemStyle : placeHolderStyle
									}
								]
							},
							{
								name:'用户访问量',
								type:'pie',
								clockWise:false,
								center: ['75%','45%'],
								radius : ['40%', '50%'],
								itemStyle : dataStyle,
								data:[
									{
										value: pv.neutrality_pv||0,
										name: '中立新闻',
										id: 'neutrality_pv',
										datestr: item.datestr
									},
									{
										value: pv.positive_pv||0,
										name: '',
										itemStyle : placeHolderStyle
									},
									{
										value: pv.negative_pv||0,
										name: '',
										itemStyle : placeHolderStyle
									}
								]
							},
							{
								name: '媒体报道量',
								type: 'pie',
								center: ['25%','45%'],
								radius: ['40%','40%'],
								data: [],
								markPoint: {
									clickable: false,
									symbol: 'emptyCircle',
									symbolSize: 10,
									itemStyle: {
										normal: {
											color: 'rgba(255,255,255,0)',
											label: {
												textStyle: {
													fontSize: 30,
													color: '#fff',
													fontWeight: 'bold'
												},
												formatter: '{a}'
											}
										}
									},
									data: [
										{name: '媒体报道量' , x: '25%', y: '45%' , textStyle: {color: '#fff'}}
									]
								},
							},
							{
								name: '用户访问量',
								type: 'pie',
								center: ['75%','45%'],
								radius: ['40%','40%'],
								data: [],
								markPoint: {
									clickable: false,
									symbol: 'emptyCircle',
									symbolSize: 10,
									itemStyle: {
										normal: {
											color: 'rgba(255,255,255,0)',
											label: {
												textStyle: {
													fontSize: 30,
													color: '#fff',
													fontWeight: 'bold'
												},
												formatter: '{a}'
											}
										}
									},
									data: [
										{name: '用户访问量' , x: '75%', y: '45%',textStyle: {color: '#fff'}}
									]
								},
							}
						]
					});
				};
				// console.log(chart[6]);
				ec.init(document.getElementById('echart6')).setOption(chart[6]).on('click',function(res){
					console.log(res);
					var url = 'index.php?s=/home/api/emotion_pie_five',
						datestr = String(res.data.datestr||''),
						type = String(res.data.id||''),
						title = String(res.name) + '-' + (String(res.data.id).indexOf('_num')>0?'媒体报道量':'用户访问量') + '排行',
						moreUrl = "index.php?s=/Home/trend/emotionpie&datestr="+datestr+"&type="+type,
						params = {
							title: title,
							moreUrl: moreUrl,
							url: url,
							data: {datestr:datestr,type:type}
						};
					if (params.data.datestr.length != 0 && params.data.type.length != 0) {
						$("#toggleTable").modal();
						$("#toggleTable").find('.loading').eq(0).show();
						$("#toggleTable").find('.modal-dialog').hide();
						getDataFromServer(params);
					};
				});
			};
		};
	});
}

// 情感趋势
function setDataForChart7(){
	require(
	[
		'echarts',
		'echarts/chart/line'
	],function (ec){
		chart[7] = {
			title : {
				show: false
			},
			grid: {
				borderWidth: 0,
				x: 100,
				y: 10,
				y2: 150
			},
			tooltip : {
				trigger: 'item',
				formatter : function (params) {
					// console.log(params);
					var date = new Date(params.value[0]);
					data = date.getFullYear() + '-'
							+ (date.getMonth() + 1) + '-'
							+ date.getDate();
					var numSplit = String(params.value[1]).split("").reverse().join("").replace(/(\d{3})(?=[^$])/g, "$1,").split("").reverse().join("");
					return params.seriesName +' : '+ data + '<br/>'
							+ '媒体报道量：' + numSplit
				}
			},
			dataZoom: dataZoomStyle,
			legend : {
				x: 'center',
				y: 'bottom',
				data : ['负面新闻','中立新闻','正面新闻'],
				textStyle: {
					color: '#fff'
				},
				itemGap: 50
			},
			xAxis : lineXAxisStyle,
			yAxis : lineYAxisStyle,
			series : [
				{
					name: '负面新闻',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					data: []
				},{
					name: '中立新闻',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					data: []
				},{
					name: '正面新闻',
					type: 'line',
					smooth: true,
					showAllSymbol: true,
					data: []
				}
			]
		}
		// console.log(emotion_line);
		if (emotion_line.result == 1 && emotion_line.data && emotion_line.data.length != 0) {
			var dataList = emotion_line.data;
			for (var i = 0; i < dataList.length; i++) {
				// dataList[i].datestr;
				chart[7].series[0].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),parseInt(dataList[i].negative)||0,'negative']);
				chart[7].series[1].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),parseInt(dataList[i].neutrality)||0,'neutrality']);
				chart[7].series[2].data.push([new Date(dataList[i].datestr.replace(/-/ig,'/')),parseInt(dataList[i].positive)||0,'positive']);
			};
		};
		ec.init(document.getElementById('echart7')).setOption(chart[7]).on('click',function(res){
			// console.log(res);
			$("#toggleTable").modal();
			$("#toggleTable").find('.loading').eq(0).show();
			$("#toggleTable").find('.modal-dialog').hide();
			var url = 'index.php?s=/home/api/emotion_line',
				datestr = String(res.data[0].getFullYear())+'-'+String(res.data[0].getMonth()+1)+'-'+String(res.data[0].getDate()),
				type = String(res.data[2]),
				title = String(res.seriesName) + '-' + '媒体报道量排行',
				moreUrl = "index.php?s=/Home/trend/emotionline&type="+type+"&datestr="+datestr,
				params = {
					title: title,
					moreUrl: moreUrl,
					url: url,
					data: {datestr:datestr,type:type}
				};
				// console.log(res.seriesName);
				// console.log(params);
			getDataFromServer(params);
		});
	});
}

// 向服务器请求table数据
function getDataFromServer(params){
	if (jageObjNull(params)) {
		M.tool.fnAjax({
			url : params.url,
			data : params.data,
			successCallback : function(response){
				// console.log(response);
				if (response) {
					var dataJson = jQuery.parseJSON(response);
					// console.log(dataJson);
					if (dataJson.result == 1) {
						$("#toggleTable").find(".modal-dialog").eq(0).show();
						$("#toggleTable").find(".modal-title").eq(0).html(params.title + '-<small>' + params.data.datestr + '</small>');
						$("#toggleTable").find('.modal-more').eq(0).attr('href',params.moreUrl);
						setTableContent(dataJson.data,params.data.datestr);
					}else {
						$("#toggleTable").find('.loading').eq(0).hide();
						promptTip(dataJson.message);
					};
				} else {
					$("#toggleTable").find('.loading').eq(0).hide();
				};
			},
			completeCallback : function(){
				$("#toggleTable").find('.loading').eq(0).hide();
			}
		});
	} else {
		$("#toggleTable").modal('hide');
	}
}
// 向table中添加内容
function setTableContent(datas,datestr){
	if (datas && datestr) {
		// console.log(datas);
		json_fids = jQuery.parseJSON(datas.fidarr)|| [];
		json_sids = jQuery.parseJSON(datas.sidarr)|| [];
		var list = jQuery.parseJSON(datas.list) || {};
		if (list && list.result && list.result === 1 && list.data && list.data.length > 0) {
			var newsList = list.data;
			// console.log(newsList);
			var htmlL = '',htmlR = '';
			for (var i = 0; i < newsList.length; i++) {
				if (i>19) {
					break;
				};
				var ClusterId0 = newsList[i].ClusterId0,
					ClusterId4 = newsList[i].ClusterId4,
					NewsSource = newsList[i].NewsSource,
					Title = newsList[i].Title,
					Url = newsList[i].Url,
					id = newsList[i].id,
					selected,
					collected;
				if (json_fids.length > 0) {
					collected = json_fids.contains(id);
				}else{
					collected = false;
				};
				if (json_sids.length > 0) {
					selected = json_sids.contains(id);
				}else{
					selected = false;
				};
				if (i < 9) {
					htmlL += '<tr>';
					htmlL += '<td><a href="index.php?s=/home/Index/hotdetail&cid0='+ ClusterId0 +'&cid4='+ ClusterId4 +'&datestr='+ datestr +'" target="_blank">'+ $.trim(Title) +'</a></td>';
					htmlL += '<td>'+ NewsSource +'</td>';
					if (collected) {
						htmlL += '<td><a data-collected="0" href="javascript:void(0);" class="a-star"><i class="glyphicon glyphicon-star a-icon-star-light"></i></a></td>';
					} else {
						htmlL += '<td><a data-collected="1" href="javascript:void(0);" class="a-star"><i class="glyphicon glyphicon-star a-icon-star"></i></a></td>';
					};
					htmlL += '<td>';
					if (selected) {
						htmlL += '<a href="javascript:void(0);" data-selected="0" class="btn btn-default btn-sm a-selected">已 选</a>';
					} else {
						htmlL += '<a href="javascript:void(0);" data-selected="1" class="btn btn-primary btn-sm a-selected">选 定</a>';
					};
					htmlL += '<input data-title="'+ encodeURIComponent(Title) +'" data-cid0="'+ ClusterId0 +'" data-cid4="'+ ClusterId4 +'" data-datestr="'+ datestr +'" data-id="'+ id +'" name="trends" type="hidden">';
					htmlL += '</td>';
					htmlL += '</tr>';
				} else {
					htmlR += '<tr>';
					htmlR += '<td><a href="index.php?s=/home/Index/hotdetail&cid0='+ ClusterId0 +'&cid4='+ ClusterId4 +'&datestr='+ datestr +'" target="_blank">'+ $.trim(Title) +'</a></td>';
					htmlR += '<td>'+ NewsSource +'</td>';
					if (collected) {
						htmlR += '<td><a data-collected="0" href="javascript:void(0);" class="a-star"><i class="glyphicon glyphicon-star a-icon-star-light"></i></a></td>';
					} else {
						htmlR += '<td><a data-collected="1" href="javascript:void(0);" class="a-star"><i class="glyphicon glyphicon-star a-icon-star"></i></a></td>';
					};
					htmlR += '<td>';
					if (selected) {
						htmlR += '<a href="javascript:void(0);" data-selected="0" class="btn btn-default btn-sm a-selected">已 选</a>';
					} else {
						htmlR += '<a href="javascript:void(0);" data-selected="1" class="btn btn-primary btn-sm a-selected">选 定</a>';
					};
					htmlR += '<input data-title="'+ encodeURIComponent(Title) +'" data-cid0="'+ ClusterId0 +'" data-cid4="'+ ClusterId4 +'" data-datestr="'+ datestr +'" data-id="'+ id +'" name="trends" type="hidden">';
					htmlR += '</td>';
					htmlR += '</tr>';
				};
			};
			$("#toggleTable").find(".modal-body>.a-table").eq(0).children('tbody').html(htmlL);
			if (htmlR.length != 0) {
				$("#toggleTable").find(".modal-body>.a-table").eq(1).show();
				$("#toggleTable").find(".modal-body>.a-table").eq(1).children('tbody').html(htmlR);
			} else {
				$("#toggleTable").find(".modal-body>.a-table").eq(1).hide();
			};
		};
	};
}