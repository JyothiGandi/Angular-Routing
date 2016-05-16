/**
 * Created by jgandi on 16/5/16.
 */

angular.module('Material',[])

.controller('MaterialListCtrl',['$scope',function($scope){
        $scope.materials = [
            {
                id: 1,
                name: 'Material1',
                snippet: 'old and strong',
                age: '23'
            },{
                id: 2,
                name: 'Material2',
                snippet: 'recent and strong',
                age: '15'
            },{
                id: 3,
                name: 'Material2',
                snippet: 'new and popular',
                age: '10'
            }

        ];
    }])

.controller('MaterialDetailCtrl',['$scope','$stateParams',function($scope,$stateParams){
        $scope.materialId = $stateParams.materialId;
    }])
