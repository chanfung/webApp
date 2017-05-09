(function(angular){
    'use strict';
    var app = angular.module('app',[]);
    app.controller('appController',['$scope',function($scope){
        $scope.webTitle = '今日一刻';
        $scope.type = 'home';
        $scope.title = '今日一刻';
        
        $scope.barClick = function (type){
            switch (type){
                case 'home':
                    $scope.title = '今日一刻';
                    $scope.type = type;
                    break;
                case 'author':
                    $scope.title = '作者';
                    $scope.type = type;
                    break;
                case 'content':
                    $scope.title = '栏目';
                    $scope.type = type;
                    break;
                case 'my':
                    $scope.title = '我的';
                    $scope.type = type;
                    break;
            }

            $scope.$broadcast('changeTitle',{type:type,title:$scope.title});
        };
    }]);
})(angular);
