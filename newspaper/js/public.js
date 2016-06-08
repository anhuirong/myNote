var D = {
    // config: {host: "http://139.217.0.13/"}
    config: {host: "http://rongshijie.tv/"}
},
classify = [
    {name:'汽车',en:'rt_Auto'},
    {name:'商业',en:'rt_Business'},
    {name:'国内',en:'rt_China'},
    {name:'教育',en:'rt_Education'},
    {name:'娱乐',en:'rt_Entertainment'},
    {name:'游戏',en:'rt_Games'},
    {name:'健康',en:'rt_Health'},
    {name:'生活',en:'rt_LifeStyle'},
    {name:'军事',en:'rt_Military'},
    {name:'房产',en:'rt_RealEstate'},
    {name:'科技',en:'rt_ScienceAndTechnology'},
    {name:'社会',en:'rt_Society'},
    {name:'体育',en:'rt_Sports'},
    {name:'其他',en:'rt_Unclassified'},
    {name:'国外',en:'rt_World'}
],
rankClassify =[
    {name:'用户兴趣排行',en:'hot'},
    {name:'媒体报道排行',en:'num'},
    {name:'本地话题排行',en:'liao_hot'},
    {name:'长期话题排行',en:'long'},
    {name:'潜力话题排行',en:'up'},
    {name:'争议话题排行',en:'neutrality'},
    {name:'正能量话题排行',en:'positive'},
    {name:'负能量话题排行',en:'negative'}
],
provinceName = [
    {name:'安徽',en:'Anhui',capital: '合肥'},
    {name:'北京',en:'Beijing',capital: '北京'},
    {name:'重庆',en:'Chongqing',capital: '重庆'},
    {name:'福建',en:'Fujian',capital: '福州'},
    {name:'甘肃',en:'Gansu',capital: '兰州'},
    {name:'广东',en:'Guangdong',capital: '广州'},
    {name:'广西',en:'Guangxi',capital: '南昌'},
    {name:'贵州',en:'Guizhou',capital: '贵阳'},
    {name:'海南',en:'Hainan',capital: '海口'},
    {name:'河北',en:'Hebei',capital: '石家庄'},
    {name:'黑龙江',en:'Heilongjiang',capital: '哈尔滨'},
    {name:'河南',en:'Henan',capital: '郑州'},
    {name:'湖北',en:'Hubei',capital: '武汉'},
    {name:'湖南',en:'Hunan',capital: '长沙'},
    {name:'江苏',en:'Jiangsu',capital: '南京'},
    {name:'江西',en:'Jiangxi',capital: '南昌'},
    {name:'吉林',en:'Jilin',capital: '长春'},
    {name:'辽宁',en:'Liaoning',capital: '沈阳'},
    {name:'宁夏',en:'Ningxia',capital: '银川'},
    {name:'内蒙古',en:'NeiMengGu',capital: '呼和浩特'},
    {name:'青海',en:'Qinghai',capital: '西宁'},
    {name:'陕西',en:'Shaanxi',capital: '西安'},
    {name:'山东',en:'Shandong',capital: '济南'},
    {name:'上海',en:'Shanghai',capital: '上海'},
    {name:'山西',en:'Shanxi',capital: '太原'},
    {name:'四川',en:'Sichuan',capital: '成都'},
    {name:'天津',en:'Tianjin',capital: '天津'},
    {name:'西藏',en:'Xizang',capital: '拉萨'},
    {name:'新疆',en:'Xinjiang',capital: '乌鲁木齐'},
    {name:'云南',en:'Yunnan',capital: '昆明'},
    {name:'浙江',en:'Zhejiang',capital: '杭州'}
],
optionsPie = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        width: 370,
        height: 300
    },
    title: {
        text: ''
    },
    credits: {
        enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <br /><b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
            center: ["50%"],
            size: '90%',
            point: {
                events: {
                    legendItemClick: function() {
                        return false;
                    }
                }
            }
        }
    },
    series: [{
        type: 'pie',
        name: '年龄比例',
        data: []
    }]
},
cities = {
    "海门":[121.1882240000,31.8778570000],
    "鄂尔多斯":[109.7873140000,39.6146300000],
    "招远":[120.4408110000,37.3610500000],
    "舟山":[122.2143390000,29.9910920000],
    "齐齐哈尔":[123.9245310000,47.3600870000],
    "盐城":[120.1681870000,33.3553010000],
    "赤峰":[118.8954630000,42.2645860000],
    "青岛":[120.3894450000,36.0723580000],
    "乳山":[121.5466270000,36.9263900000],
    "金昌":[102.1941970000,38.5257770000],
    "泉州":[118.6823160000,24.8802420000],
    "莱西":[120.4428310000,36.8636370000],
    "日照":[119.5336060000,35.4227980000],
    "胶南":[119.8563100000,35.8528580000],
    "南通":[120.9003010000,31.9852370000],
    "拉萨":[91.1210250000,29.6500880000],
    "云浮":[112.0510450000,22.9211540000],
    "梅州":[116.1291790000,24.2943110000],
    "文登":[122.0107820000,37.1541200000],
    "上海":[121.4802370000,31.2363050000],
    "攀枝花":[101.7252620000,26.5881090000],
    "威海":[122.1282450000,37.5193220000],
    "承德":[117.9697980000,40.9578550000],
    "厦门":[118.0959150000,24.4858210000],
    "汕尾":[115.3816930000,22.7913220000],
    "潮州":[116.6294300000,23.6629230000],
    "丹东":[124.3385430000,40.1290230000],
    "太仓":[121.1363470000,31.4648020000],
    "曲靖":[103.8026850000,25.4963280000],
    "烟台":[121.4544250000,37.4698680000],
    "福州":[119.3029380000,26.0804470000],
    "瓦房店":[121.9865880000,39.6320800000],
    "即墨":[120.4536850000,36.3952720000],
    "抚顺":[123.9635950000,41.8860780000],
    "玉溪":[102.5537000000,24.3575120000],
    "张家口":[114.8941650000,40.8301720000],
    "阳泉":[113.5870870000,37.8623400000],
    "莱州":[119.9487630000,37.1826570000],
    "湖州":[120.0945660000,30.8990150000],
    "汕头":[116.6887390000,23.3592890000],
    "昆山":[120.9882660000,31.3909000000],
    "宁波":[121.5566860000,29.8801770000],
    "湛江":[110.3654940000,21.2771630000],
    "揭阳":[116.3792200000,23.5557730000],
    "荣成":[122.4927830000,37.1711530000],
    "连云港":[119.2295710000,34.6023420000],
    "葫芦岛":[120.8433880000,40.7173640000],
    "常熟":[120.7588630000,31.6597700000],
    "东莞":[113.7582310000,23.0269970000],
    "河源":[114.7070970000,23.7498290000],
    "淮安":[119.0224290000,33.6162720000],
    "泰州":[119.9321150000,32.4612000000],
    "南宁":[108.3733510000,22.8230370000],
    "营口":[122.2414750000,40.6725650000],
    "惠州":[114.4233480000,23.1164090000],
    "江阴":[120.2919690000,31.9257900000],
    "蓬莱":[120.0919170000,31.9294710000],
    "韶关":[113.6037570000,24.8161740000],
    "嘉峪关":[98.2965140000,39.7782680000],
    "广州":[113.6907000000,23.3053080000],
    "延安":[109.4963610000,36.5910030000],
    "太原":[112.5570600000,37.8768850000],
    "清远":[113.0626190000,23.6882380000],
    "中山":[113.3990230000,22.5222620000],
    "昆明":[102.8396670000,24.8859530000],
    "寿光":[118.7973950000,36.8617320000],
    "盘锦":[122.0772690000,41.1259390000],
    "长治":[113.1230460000,36.2015850000],
    "深圳":[114.0661120000,22.5485150000],
    "珠海":[113.5832350000,22.2763920000],
    "宿迁":[118.2820620000,33.9676860000],
    "咸阳":[108.7157120000,34.3355990000],
    "铜川":[108.9515580000,34.9029570000],
    "平度":[119.9664890000,36.7925170000],
    "佛山":[113.1284320000,23.0277070000],
    "海口":[110.2064240000,20.0500570000],
    "江门":[113.0881650000,22.5844590000],
    "章丘":[117.5323440000,36.6854150000],
    "肇庆":[112.4717700000,23.0529840000],
    "大连":[121.6213910000,38.9193450000],
    "临汾":[111.5261530000,36.0940520000],
    "吴江":[120.6394020000,31.0148470000],
    "石嘴山":[106.3907800000,38.9897830000],
    "沈阳":[123.4389730000,41.8113390000],
    "苏州":[120.5896130000,31.3045660000],
    "茂名":[110.9317730000,21.6690510000],
    "嘉兴":[120.7620450000,30.7509120000],
    "长春":[125.3301700000,43.8217800000],
    "胶州":[120.0400780000,36.2703890000],
    "银川":[106.2389760000,38.4923920000],
    "张家港":[120.5620520000,31.8812170000],
    "三门峡":[111.2068320000,34.7784420000],
    "锦州":[121.1336310000,41.1008690000],
    "南昌":[115.8645280000,28.6876750000],
    "柳州":[109.4219800000,24.3315190000],
    "三亚":[109.5186460000,18.2582170000],
    "自贡":[104.7848910000,29.3453790000],
    // "吉林市":[126.5560730000,43.8435120000],
    "阳江":[111.9890510000,21.8644210000],
    "泸州":[105.4490920000,28.8775770000],
    "西宁":[101.7842690000,36.6234770000],
    "宜宾":[104.6481030000,28.7576100000],
    "呼和浩特":[111.7585180000,40.8474610000],
    "成都":[104.0712160000,30.5762790000],
    "大同":[113.3064460000,40.0825390000],
    "镇江":[119.4314940000,32.1956880000],
    "桂林":[110.2964420000,25.2798930000],
    "张家界":[110.4849250000,29.1224770000],
    "宜兴":[119.8300690000,31.3460710000],
    "北海":[109.1266140000,21.4869550000],
    "西安":[108.9463060000,34.3474360000],
    "金坛":[119.6045110000,31.7290120000],
    "东营":[118.6810460000,37.4399900000],
    "牡丹江":[129.6389760000,44.5586470000],
    "遵义":[106.9336580000,27.7317490000],
    "绍兴":[120.5866730000,30.0365190000],
    "扬州":[119.4191070000,32.3998600000],
    "常州":[119.9801420000,31.8167910000],
    "潍坊":[119.1681380000,36.7132120000],
    // "重庆市":[106.5571650000,29.5709970000],
    "台州":[121.4269960000,28.6622970000],
    "南京":[119.7028910000,33.0647350000],
    "滨州":[117.9792000000,37.3883870000],
    "贵阳":[106.6368160000,26.6527470000],
    "无锡":[120.3189540000,31.4967040000],
    "本溪":[123.7734680000,41.2998470000],
    "克拉玛依":[84.8958700000,45.5857650000],
    "渭南":[109.4839330000,34.5023580000],
    "马鞍山":[118.5126910000,31.6763300000],
    "宝鸡":[107.2438990000,34.3677470000],
    "焦作":[113.2485570000,35.2214930000],
    "句容":[119.1750720000,31.9511470000],
    "北京":[116.4135540000,39.9110130000],
    "徐州":[117.2923500000,34.2101430000],
    "衡水":[115.6769420000,37.7451660000],
    "包头":[109.8467550000,40.6636360000],
    "绵阳":[104.6861640000,31.4733640000],
    "乌鲁木齐":[87.6233140000,43.8328060000],
    "枣庄":[117.3285130000,34.8165690000],
    "杭州":[120.8616930000,29.0000590000],
    "淄博":[118.0612540000,36.8191820000],
    "鞍山":[123.0009740000,41.1141220000],
    "溧阳":[119.4911080000,31.4217550000],
    "库尔勒":[86.1800780000,41.7326160000],
    "安阳":[114.3996000000,36.1036490000],
    "开封":[114.3139040000,34.8029410000],
    "济南":[118.2749670000,36.5027850000],
    "德阳":[104.4043190000,31.1331050000],
    "温州":[120.7058690000,28.0010950000],
    "九江":[116.0079930000,29.7113280000],
    "邯郸":[114.5458080000,36.6312220000],
    "临安":[119.7313180000,30.2397320000],
    "兰州":[103.8406920000,36.0673120000],
    "沧州":[116.8452720000,38.3102200000],
    "临沂":[118.3629900000,35.1105310000],
    "南充":[106.1172310000,30.8432970000],
    "天津":[117.2059140000,39.0909080000],
    "富阳":[119.8466920000,30.0010940000],
    "泰安":[117.0948930000,36.2059050000],
    "诸暨":[120.2427200000,29.7199910000],
    "郑州":[113.6313490000,34.7534880000],
    "哈尔滨":[126.5424170000,45.8077820000],
    "聊城":[115.9920770000,36.4626810000],
    "芜湖":[118.4395610000,31.3587980000],
    "唐山":[118.1870360000,39.6366730000],
    "平顶山":[113.1989350000,33.7720510000],
    "邢台":[114.5108890000,37.0766460000],
    "德州":[116.3658250000,37.4413130000],
    "济宁":[116.5938520000,35.4202690000],
    "荆州":[112.2472200000,30.3406060000],
    "宜昌":[111.2929710000,30.6976020000],
    "义乌":[120.0812620000,29.3113260000],
    "丽水":[119.9295030000,28.4729790000],
    "洛阳":[112.4600330000,34.6243760000],
    "秦皇岛":[119.6061840000,39.9412590000],
    "株洲":[113.1404310000,27.8337370000],
    "石家庄":[114.5208280000,38.0486840000],
    "莱芜":[117.6832210000,36.2193570000],
    "常德":[111.7049940000,29.0377230000],
    "保定":[115.4710520000,38.8800550000],
    "湘潭":[112.9505750000,27.8358500000],
    "金华":[119.6540270000,29.0844550000],
    "岳阳":[113.1356790000,29.3632620000],
    "长沙":[112.9453330000,28.2339710000],
    "衢州":[118.8807680000,28.9416610000],
    "廊坊":[116.6903400000,39.5435200000],
    "菏泽":[115.4876960000,35.2394350000],
    "合肥":[117.2354470000,31.8268700000],
    "武汉":[114.3118310000,30.5984280000],
    "大庆":[125.1097270000,46.5932160000]
};

$(function(){

    // 修改密码部分 start
    $("#userModal :input").on({
        blur:function(){
            if ($(this).val().length == 0) {
                $(this).parent('li').eq(0).addClass('has-error');
            };
        },
        focus:function(){
            if ($(this).parent('li').eq(0).hasClass('has-error')) {
                $(this).parent('li').eq(0).removeClass('has-error');
            };
        }
    });
    $("a[data-dismiss='modal']").click( function () {
        $("#userModal :input").val('');
        $("#userModal").find('.has-error').removeClass('has-error');
    });
    $("#confirm").click( function () {
        var input = $("#userModal :input"),
            judgeNull = 1;
        $.each(input , function(index, el) {
            if($(el).val().length === 0) {
                judgeNull = 0;
                return false;
            };
        });
        if (judgeNull) {
            var pw1 = String($("#new").val());
            var pw2 = String($("#renew").val());
            if (pw1 === pw2) {
                var pwOld = String($("#old").val());
                M.tool.fnAjax({
                    url : 'index.php?s=/Home/User/submitPassword',
                    data : {oldpassword:pwOld,password:pw1,repassword:pw2},
                    beforeSendCallback: function(){
                        $("#loading").show();
                    },
                    successCallback : function(response){
                        if (response) {
                            var dataJson = jQuery.parseJSON(response);
                            if (dataJson.result == 1) {
                                promptTip(dataJson.message);
                                $("#userModal :input").val('');
                                $('#userModal').modal('hide');
                            } else {
                                promptTip(dataJson.message);
                                // $('#userModal').modal('show');
                            };
                        }else{
                            promptTip('密码修改失败，请重试！');
                        };
                    },
                    errorSendCallback: function(){
                        promptTip('网络错误，请稍后重试！');
                    },
                    completeCallback : function(){
                        $("#loading").hide();
                    }
                });
            } else {
                promptTip('两次密码不相同，请重新输入！');
                $("#renew").val('').focus();
            };
        } else {
            promptTip('输入内容不能为空');
        };
    });
    // 修改密码部分 end

    // 关闭提示信息
    $(".message").on("click",".a-close",function(){
        $(".message").fadeOut();
    });
});


//修改分页页码
function changePaging(e){
    // alert(e);
    var pagingHtml = '',
        pagingNum = parseInt(e);
    if (totalPage&&pagingNum) {
        pagingHtml += '<div class="form-group">';
        if (pagingNum === 1) {
            pagingHtml += '<a disabled href="javascript:void(0);" class="btn">首页</a>';
            pagingHtml += '<a disabled href="javascript:void(0);" class="btn">上一页</a>';
        }else{
            pagingHtml += '<a href="javascript:changePage(1);" class="btn">首页</a>';
            pagingHtml += '<a href="javascript:changePage(0);" class="btn">上一页</a>';
        };
        pagingHtml += '</div>';
        pagingHtml += '<div class="form-group">';
        pagingHtml += '<ul class="pagination">';
        if (totalPage <= 5) {
            for (var i = 1; i <=totalPage; i++) {
                if (i === pagingNum) {
                    pagingHtml += '<li><a class="disabled" href="javascript:void(0);">'+ i +'</a></li>';
                }else{
                    pagingHtml += '<li><a href="javascript:changePage('+ i +');">'+ i +'</a></li>';
                };
            };
        }else{
            if (pagingNum>0&&pagingNum<3) {
                for (var i = 1; i < 4; i++) {
                    if (i === pagingNum) {
                        pagingHtml += '<li><a class="disabled" href="javascript:void(0);">'+ i +'</a></li>';
                    }else{
                        pagingHtml += '<li><a href="javascript:changePage('+ i +');">'+ i +'</a></li>';
                    };
                };
                pagingHtml += '<li><a class="disabled">...</a></li>';
                pagingHtml += '<li><a href="javascript:changePage('+ (totalPage-1) +');">'+ (totalPage-1) +'</a></li>';
                pagingHtml += '<li><a href="javascript:changePage('+ totalPage +');">'+ totalPage +'</a></li>';

            };
            if (pagingNum == 3) {
                pagingHtml += '<li><a href="javascript:changePage(1);">1</a></li>';
                pagingHtml += '<li><a href="javascript:changePage(2);">2</a></li>';
                pagingHtml += '<li><a  class="disabled" href="javascript:changePage(3);">3</a></li>';
                pagingHtml += '<li><a href="javascript:changePage(4);">4</a></li>';
                pagingHtml += '<li><a class="disabled">...</a></li>';
                pagingHtml += '<li><a href="javascript:changePage('+ totalPage +');">'+ totalPage +'</a></li>';
            };
            if (pagingNum == (totalPage-2)) {
                pagingHtml += '<li><a href="javascript:changePage(1);">1</a></li>';
                pagingHtml += '<li><a class="disabled">...</a></li>';
                pagingHtml += '<li><a href="javascript:changePage('+ (totalPage-3) +');">'+ (totalPage-3) +'</a></li>';
                pagingHtml += '<li><a class="disabled" href="javascript:changePage('+ (totalPage-2) +');">'+ (totalPage-2) +'</a></li>';
                pagingHtml += '<li><a href="javascript:changePage('+ (totalPage-1) +');">'+ (totalPage-1) +'</a></li>';
                pagingHtml += '<li><a href="javascript:changePage('+ totalPage +');">'+ totalPage +'</a></li>';
            };
            if (pagingNum>totalPage-2&&pagingNum<totalPage+1) {
                pagingHtml += '<li><a href="javascript:changePage(1);">1</a></li>';
                pagingHtml += '<li><a href="javascript:changePage(2);">2</a></li>';
                pagingHtml += '<li><a class="disabled">...</a></li>';
                for (var i = (totalPage-2); i < (totalPage+1); i++) {
                    if (i === pagingNum) {
                        pagingHtml += '<li><a  class="disabled" href="javascript:void(0);">'+ i +'</a></li>';
                    }else{
                        pagingHtml += '<li><a href="javascript:changePage('+ i +');">'+ i +'</a></li>';
                    };
                };
            };
            if (pagingNum>3&&pagingNum<totalPage-2) {
                pagingHtml += '<li><a href="javascript:changePage(1);">1</a></li>';
                pagingHtml += '<li><a>...</a></li>';
                pagingHtml += '<li><a href="javascript:changePage('+ (pagingNum-1) +');">'+ (pagingNum-1) +'</a></li>';
                pagingHtml += '<li><a class="disabled" href="javascript:changePage('+ pagingNum +');">'+ pagingNum +'</a></li>';
                pagingHtml += '<li><a href="javascript:changePage('+ (pagingNum+1) +');">'+ (pagingNum+1) +'</a></li>';
                pagingHtml += '<li><a class="disabled">...</a></li>';
                pagingHtml += '<li><a href="javascript:changePage('+ totalPage +');">'+ totalPage +'</a></li>';
            };
        };
        if (pagingNum === totalPage) {
            pagingHtml += '</ul>';
            pagingHtml += '</div>';
            pagingHtml += '<div class="form-group">';
            pagingHtml += '<a disabled href="javascript:void(0);" class="btn">下一页</a>';
            pagingHtml += '<a disabled href="javascript:void(0);" class="btn">末页</a>';
            pagingHtml += '</div>';
        }else{
            pagingHtml += '</ul>';
            pagingHtml += '</div>';
            pagingHtml += '<div class="form-group">';
            pagingHtml += '<a href="javascript:changePage(-1);" class="btn">下一页</a>';
            pagingHtml += '<a href="javascript:changePage('+ totalPage +');" class="btn">末页</a>';
            pagingHtml += '</div>';
        };
    };
    // console.log(pagingHtml);
    $("#paging").html(pagingHtml);
}

//修改分页后页面的内容
function changePage(p){
    if (p == 0) {
        prePage--;
        p = prePage;
    }else if(p == -1){
        prePage++;
        p = prePage;
    };
    // alert(p);
    getDataFromServer(p);
    changePaging(p);
}

// tab 最多放6个
function setTabBarContent(_this){
    var cellLength = $(".tab-bar>.left>ul").children("li").length;
    if (cellLength < 6) {
        $(".tab-bar>.left>ul").find("li").removeClass('active');
        _this.parent().clone().addClass("active").appendTo(".tab-bar>.left>ul");
        _this.parent().remove();
    }else{
        $(".tab-bar>.left>ul>li").last().clone().appendTo(".a-add-tab-content>ul");
        $(".tab-bar>.left>ul>li").last().remove();
        _this.parent().clone().addClass("active").appendTo(".tab-bar>.left>ul");
        _this.parent().remove();
    };
    $(".a-add-tab-content").hide();
}

// tab 最多放17个
function setThisTabBarContent(_this){
    var cellLength = $(".tab-bar>.paper-tab-bar>ul").children("li").length;
    if (cellLength < 17) {
        $(".tab-bar>.paper-tab-bar>ul").find("li").removeClass('active');
        _this.parent().clone().addClass("active").appendTo(".tab-bar>.paper-tab-bar>ul");
        _this.parent().remove();
    }else{
        $(".tab-bar>.paper-tab-bar>ul>li").last().clone().appendTo(".a-add-tab-content>ul");
        $(".tab-bar>.paper-tab-bar>ul>li").last().remove();
        _this.parent().clone().addClass("active").appendTo(".tab-bar>.paper-tab-bar>ul");
        _this.parent().remove();
    };
    $(".a-add-tab-content").hide();
}

// go to top
function goTop () {
    $(".a-content-box").scrollTop(0);
    $(".a-content-left").scrollTop(0);
}

// 判断数组中是否存在item
Array.prototype.contains = function(item){
    return RegExp(item).test(this);
};
// 判断字段是否在cities对象中
// Object.prototype.containcity = function(item){
//     var str = JSON.stringify(this);
//     return RegExp(item).test(str);
// };

// 英文 分类 替换成中文
function replaceCategory(str) {
    var rt = $.trim(String(str));
    var res = '';
    for (var i = 0; i < classify.length; i++) {
        if (rt === classify[i].en) {
            res = classify[i].name;
            break;
        };
    };
    return res;
}

// 排行榜中分类 英文替换为中文
function replaceRankCategory(str){
    var rt = $.trim(String(str));
    var res = '';
    for (var i = 0; i < rankClassify.length; i++) {
        if (rt === rankClassify[i].en) {
            res = rankClassify[i].name;
            break;
        };
    };
    return res;
}
// 省份名称 英文替换成汉字
function replaceProvinceName(str){
    var rt = $.trim(String(str)).toLocaleLowerCase();
    var res = '';
    for (var i = 0; i < provinceName.length; i++) {
        if (String(rt) === (provinceName[i].en).toLocaleLowerCase()) {
            res = provinceName[i].name;
            break;
        };
    };
    return res;
}
// 省份获取省会名称
function replaceProvincialCapital(str){
    var rt = $.trim(String(str)).toLocaleLowerCase();
    var res = '';
    for (var i = 0; i < provinceName.length; i++) {
        if (String(rt) === (provinceName[i].en).toLocaleLowerCase()) {
            res = provinceName[i].capital;
            break;
        };
    };
    return res;
}

// ajax请求
var M = {};
M.tool = (function () {
    var tool = {
        /*
         * obj
         *      obj.url
         *      obj.data
         *      obj.beforeSendCallback
         *      obj.successCallback
         *      obj.completeCallback
         */

        /**
         调用：M.tool.fnAjax({url : 'xxx' , data : {xxx : "xxx" , yyy : "yyy"} , beforeSendCallback : function(){}, successCallback : function(response){} , completeCallback : function(){}});
         **/
        fnAjax: function (obj) {
            $.ajax({
                type: "POST",
                data: obj.data,
                url: D.config.host + obj.url,
                timeout: 30000,
                beforeSend: function () {
                    if (obj.beforeSendCallback) {
                        obj.beforeSendCallback();
                    }
                },
                success: function (response) {
                    if (obj.successCallback) {
                        obj.successCallback(response);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    if (obj.errorSendCallback) {
                        obj.errorSendCallback();
                    }
                },
                complete: function () {
                    if (obj.completeCallback) {
                        obj.completeCallback();
                    }

                }
            });
        },
    };
    return tool;
})();

// 提示信息，点击确定关闭
function promptTip(){
    var str = arguments[0]||'';
    var tag = arguments[1]||0;
    if (tag == -1) {
        window.location.href = D.config.host;
    } else {
        $(".message").fadeIn();
        $(".message").eq(0).find('.body>.text-center').eq(0).html(str);
        // setTimeout(function(){
        //     $(".message").fadeOut();
        // },3000);
    };
}

//判断一个对象为空
function jageObjNull(obj){
    if (typeof obj === "object" && !(obj instanceof Array)){
        var hasProp = false;
        for (var prop in obj){
            hasProp = true;
            break;
        }
        if (hasProp){
            return true;
        }else{
            // throw "model.rows is empty object";
            return false;
        }
    }
}

// 将时间戳转换成YYYY-MM-dd hh:mm:ss
function getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17)
}

//计算两个时间间相差的天数
function difDate(s,e){
    var Syear = parseInt(s.getFullYear()),
        Smonth = parseInt(s.getMonth()),
        Sday = parseInt(s.getDate()),
        Eyear = parseInt(e.getFullYear()),
        Emonth = parseInt(e.getMonth()),
        Eday = parseInt(e.getDate());
    var startDate = Date.UTC(Syear,Smonth,Sday,0,0,0,0),
        endDate = Date.UTC(Eyear,Emonth,Eday,0,0,0,0);
    return (endDate-startDate) / (1000*60*60*24);
}

// YYYY-MM-DD hh:mm:ss
function changeTime(date){
    var newTime = new Date(date),
        YYYY = newTime.getFullYear(),
        MM = newTime.getMonth()+1,
        DD = newTime.getDate(),
        hh = newTime.getHours(),
        mm = newTime.getMinutes(),
        ss = newTime.getSeconds();
        console.log(date);
        // console.log(dd);
    return YYYY+"-"+MM+"-"+DD+" "+hh+":"+mm+":"+ss;
}

// 解决情感分布问题
function solvePN(a,b){
    var negative = 0.4+0.6*b/(a+b);
    return {
        p : 1- negative,
        n : negative
    }
}

var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {d}%"
        },
         legend: {
            selectedMode: false,
            y : 'bottom',
            data:[]
        },
        // legend:{show:false},
        calculable : true,
        series : [
            {
                clickable: false,
                name:'',
                type:'pie',
                clockWise:false,
                center: ['50%','40%'],
                radius : ['35%', '65%'],
                itemStyle:{normal: {labelLine:false}},
                data: [],
            }
        ]
};
// 设置年龄饼图
function setAgePie(datas){  
    option.legend.data = ['小于18','[18,25)','[25,35)','[35,50)','大于等于50'],
    option.series[0].name = '年龄分布',
    option.series[0].data = [
                {name:"小于18",value:datas.less18||0},
                {name:"[18,25)",value:datas.less25||0},
                {name:"[25,35)",value:datas.less35||0},
                {name:"[35,50)",value:datas.less50||0},
                {name:"大于等于50",value:datas.more50||0},
    ],
    echarts.init(document.getElementById('chartAge')).setOption(option);
}
// 设置性别饼图
function setGenderPie(datas){           
    option.legend.data = ['男','女'],
    option.series[0].name = '性别分布',
    option.series[0].data = [
                {name:"男",value:datas.female||0},
                {name:"女",value:datas.male||0},
    ],
    // console.log(option);
    echarts.init(document.getElementById('chartGender')).setOption(option);
}
// 设置情感分布饼图
function setSentimentPie(datas){
    option.legend.data = ['正能量','负能量'];
    option.series[0].name = '情感分布';
    pn = solvePN(datas.Positive||0,datas.Negative||0);
    option.series[0].data = [
                {name:"正能量",value:pn.p,id:'Positive'},
                {name:"负能量",value:pn.n,id:'Negative'},
    ],
    // console.log(option);
    echarts.init(document.getElementById('chartSentiment')).setOption(option);
}