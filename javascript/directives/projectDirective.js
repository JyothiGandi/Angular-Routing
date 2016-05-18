/**
 * Created by jgandi on 18/5/16.
 */

angular.module('goldmining')

    .directive('myModal', function(){
        return {
            restrict: 'E',
            transclude: true,
            //scope: { title:'@' },
            templateUrl: 'templates/shared/myModal.html'
        }
    });