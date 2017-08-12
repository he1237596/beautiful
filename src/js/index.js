/**
 * Created by rxc on 2017/7/30.
 */
var app = angular.module('app',['ui.router']);
app.controller('AppController',['$scope','$http',function ($scope) {
    $scope.title = '美丽说';

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
        templateUrl:'../views/nav_tpl.html',
        // controller:['$scope',function ($scope) {
        //     //接收主控制器转发来的广播,参数
        //     $scope.$on('home_notifice',function (e,regs) {
        //         $scope.title = regs.title;
        //         console.log(regs.title);
        //     })
        // }],
        // //用link获取并操作tabbar元素
        // /*        link:function ($scope,ele,attr) {
        //  //监听attr属性,实现返回按钮的显示与否
        //  if (attr.isBack != 'true'){
        //  ele.find('span').css({
        //  display:'none'
        //  })
        //  }
        //  }*/
    }
});

//新品热销切换
angular.module('app').directive('tabbar',function () {
    return {
        restrict:'EA',
        templateUrl:'../views/tabbar_tpl.html',
        controller:'TabbarController',
        replace:true,
        //个改变文字颜色tab栏的
        // link:function ($scope,ele,attr) {
        //     $scope.$watch('id',function (newV,oldV) {
        //         var list = ele.children()[0].children;
        //         for(var i=0;i<list.length;i++){
        //             list[i].className = '';
        //         }
        //         list[$scope.id].className = 'active';
        //     })
        // }
    }
});

app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('new',{
        // url 可以和state不一样,但是最好一样
        url:'/new',
        template:'<new></new>',
        controller:['$scope',function ($scope) {
            $scope.title = '1231';
        }]
    }).state('hot',{
        url:'/hot',
        template:'<hot></hot>',
    });

    // 设置默认
    $urlRouterProvider.otherwise('new');
}]);

/*
 angular.module('app').directive('list', function () {
 return {
 restrict: 'EA',
 templateUrl: '../views/list.html',
 // template:'<p>我啊啊啊啊啊</p>',
 controller: ['$scope', '$http', function ($scope, $http) {
 $scope.butter = '哈哈哈哈哈哈';
 $http({
 url: 'http://mce.meilishuo.com/jsonp/get/2',
 method: 'jsonp',
 params: {
 offset: 0,
 frame: 3,
 trace: 0,
 limit: 10,
 endId: 0,
 pid: 38369,
 page: 9
 }
 }).then(function (regs) {
 console.log(regs.data);
 $scope.items = regs.data.data;
 console.log($scope.items);
 }).catch(function (err) {
 console.log(err);
 })
 }]
 }
 });

* */
angular.module('app').directive('new', function () {
    return {
        restrict: 'EA',
        templateUrl: '../views/new.html',
        // template:'<p>我啊啊啊啊啊</p>',
        controller: ['$scope', 'myHttp', function ($scope,myHttp) {
            // $scope.butter = '哈哈哈哈哈哈';
            var url = 'http://mce.meilishuo.com/jsonp/get/2';
            var obj = {
                offset: 0,
                frame: 3,
                trace: 0,
                limit: 10,
                endId: 0,
                pid: 38369,
                page: 2
            };
            myHttp.jsonp(url,obj,function (regs) {
                console.log(regs.data);
                $scope.items = regs.data.data;
                console.log($scope.items);
            },function (err) {
                console.log(err);
            })

        }]
    }
});
angular.module('app').directive('hot', function () {
    return {
        restrict: 'EA',
        templateUrl: '../views/hot.html',
        // template:'<p>我啊啊啊啊啊</p>',
        controller: ['$scope', 'myHttp', function ($scope,myHttp) {
            // $scope.butter = '哈哈哈哈哈哈';
            var url = 'http://mce.meilishuo.com/jsonp/get/3';
            var obj = {
                offset: 0,
                frame: 3,
                trace: 0,
                limit: 10,
                endId: 0,
                pid: 38369,
                page: 1
            };
            myHttp.jsonp(url,obj,function (regs) {
                console.log(regs.data);
                $scope.items = regs.data.data;
                console.log($scope.items);
            },function (err) {
                console.log(err);
            })

        }]
    }
});
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

    };
    //post请求
    this.postData = function () {

    };
}]);




