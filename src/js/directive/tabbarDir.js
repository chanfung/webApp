(function(angular){
    angular.module('app').directive('tabbar',function(){
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/tabbar_tpl.html'
        }
    });
})(angular);
