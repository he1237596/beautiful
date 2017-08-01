/**
 * Created by rxc on 2017/7/30.
 */
var app = angular.module('app',['ui.router']);
app.controller('AppController',['$scope','$http',function ($scope,$http) {
    $scope.title = 'heihei';

}]);
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
//轮播
angular.module('app').directive('banner',function () {
    return {
        restrict:'EA',
        templateUrl:'../views/bbox.html',
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
angular.module('app').directive('list',function () {
    return {
        restrict:'EA',
        templateUrl:'../views/list.html',
        // template:'<p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p><p>我啊啊啊啊啊</p>',
        controller:['$scope','$http',function ($scope,$http) {
            $scope.butter = '哈哈哈哈哈哈'
            $http({
                url:'http://mce.meilishuo.com/jsonp/get/3',
                method:'jsonp',
                params:{
                    offset:0,
                    frame:3,
                    trace:0,
                    limit:10,
                    endId:0,
                    pid:38369,
                    page:9
                }
            }).then(function (regs) {
                console.log(regs.data);
                $scope.items = regs.data.data;
                console.log($scope.items);
            }).catch(function (err) {
                console.log(err);
            })
        }],
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




