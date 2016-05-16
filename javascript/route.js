/**
 * Created by jgandi on 16/5/16.
 */

angular.module('goldmining')

    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("equipments");
        $stateProvider
            .state("equipmentsList", {
                "url": "/equipments",
                templateUrl: 'templates/equipments/list.html',
                controller: 'EquipmentListCtrl',
                "cache": false
            })
            .state("equipmentDetails", {
                "url": "/equipments/:equipmentId",
                templateUrl: 'templates/equipments/detail.html',
                controller: 'EquipmentDetailCtrl',
                "cache": false
            }).state("materialsList", {
                "url": "/materials",
                templateUrl: 'templates/materials/list.html',
                controller: 'MaterialListCtrl',
                "cache": false
            }).state("materialsDetails", {
                "url": "/materials/:materialId",
                templateUrl: 'templates/materials/detail.html',
                controller: 'MaterialDetailCtrl',
                "cache": false
            }).state("locationsList", {
                "url": "/locations",
                templateUrl: 'templates/locations/list.html',
                controller: 'LocationListCtrl as locCtrl',
                "cache": false
            }).state("usersList", {
                "url": "/users",
                templateUrl: 'templates/users/list.html',
                controller: 'UserListCtrl as userCtrl',
                "cache": false
            });

    }])

