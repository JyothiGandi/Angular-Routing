/**
 * Created by jgandi on 16/5/16.
 */

angular.module('Equipment',[])

.controller('EquipmentListCtrl',/*['$scope','$http',*/function($scope, $http){
        $scope.equipments = [
            {
                id: 1,
                name: 'truck',
                snippet: 'old and strong',
                age: '23'
            },{
                id: 2,
                name: 'loader',
                snippet: 'recent and strong',
                age: '15'
            },{
                id: 3,
                name: 'bolder',
                snippet: 'new and popular',
                age: '10'
            }

        ];
    }/*]*/)

.controller('EquipmentDetailCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
            $scope.equipmentId = $stateParams.equipmentId;
    }])