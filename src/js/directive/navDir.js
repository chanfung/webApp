(function(angular){
    angular.module('app').directive('nav',function(){
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/nav_tpl.html',
            link:function($scope,ele,attr){
                $scope.$on('changeTitle',function(e,args){
                   ele.find('p').html(args.title);
                });
            }
        }
    });
})(angular);
