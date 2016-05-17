/**
 * Created by jgandi on 16/5/16.
 */



angular.module('Equipment',['ui.bootstrap'])

    .controller('EquipmentListCtrl',['$scope','$http','$uibModal',function($scope, $http, $uibModal){
        var equipments = [
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
        $scope.equipments = equipments;
        $scope.deleteEquipment = function(equipments,deleteIndex){
            console.log('delete',equipments[deleteIndex]);
            equipments.splice(deleteIndex,1);
        };

        $scope.equipmentModal = function(equipments,index){
            var modalInstance = $uibModal.open({
                templateUrl: 'myModalContent.html',
                controller: ['$scope', function ($scope) {
                    $scope.myequipment = {
                        editName: (index == -1) ? '' : equipments[index].name,
                        editSnippet: (index == -1) ? '' : equipments[index].snippet
                    };

                    $scope.ok = function () {

                        var equipment = {
                            name : $scope.myequipment.editName,
                            snippet : $scope.myequipment.editSnippet,
                            id : 5
                        };

                        if(index == -1) equipments.push(equipment);
                        else equipments[index]=equipment;

                        modalInstance.close();
                    };

                    $scope.cancel = function () {
                        console.log('on cancel');
                        modalInstance.dismiss('cancel');
                    };
                }]
            });
        };

    }])

    .controller('EquipmentDetailCtrl',['$scope','$stateParams',function($scope,$stateParams){
        $scope.equipmentId = $stateParams.equipmentId;
    }])

