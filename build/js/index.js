/**
 * Created by rxc on 2017/7/30.
 */
var app = angular.module('app',['ui.router']);
//主控制器
app.controller('AppController',['$scope',function ($scope) {
    $scope.title = '美丽说';
}]);
//封装网络请求
angular.module('app').service('myHttp',['$http',function ($http) {
    this.jsonp = function (url,params,success,error) {
        $http({
            url:url,
            method:'jsonp',
            params:params
        }).then(function (regs) {
            if (success) success(regs);
        }).catch(function (err) {
            if(error) error(err);
        });
    };
    //get请求
    this.getData = function () {
        $http({
            url:url,
            method:'get',
            params:params
        }).then(function (regs) {
            if (success) success(regs);
        }).catch(function (err) {
            if(error) error(err);
        });
    };
    //post请求
    this.postData = function () {
        $http({
            url:url,
            method:'post',
            // 参数数据为字符串拼接
            data:params,
            // post必须设置请求头
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).success(function (regs) {
            console.log(regs);
        }).error(function (err) {
            console.log(err);
        })
    };
}]);
//配置白名单
app.config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://mce.meilishuo.com/**'
    ]);
}])
// 头部公用
angular.module('app').directive('header',function () {
    return {
        restrict:'EA',
        templateUrl:'../views/nav.html',
    }
});

//新品热销切换
angular.module('app').directive('tabbar',function () {
    return {
        restrict:'EA',
        templateUrl:'../views/tabbar_tpl.html',
        // controller:'TabbarController',
        replace:true,
    }
});
//配置路由
app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('index',{
        url:'/index/:id',
        templateUrl:'../views/list_tpl.html',
        controller:'ListController'
    });
    // 设置默认
    $urlRouterProvider.otherwise('/index/1');
}]);
//配置list模版路由
app.controller('ListController',['$scope','$stateParams','myHttp',function ($scope,$stateParams,myHttp) {
    $scope.title = '1231';
    console.log($stateParams.id);
    $scope.type = $stateParams.id;
    var url = 'http://mce.meilishuo.com/jsonp/get/2';
    var obj = {
        offset: 0,
        frame: 3,
        trace: 0,
        limit: 10,
        endId: 0,
        pid: 38369,
        page: $scope.type
    };
    myHttp.jsonp(url,obj,function (regs) {
        console.log(regs.data);
        $scope.items = regs.data.data;
        console.log($scope.items);
    },function (err) {
        console.log(err);
    })
}]);
//底部
angular.module('app').directive('footer',function () {
    return {
        restrict:'EA',
        templateUrl:'../views/footer.html',
    }
});







