/**
 * Created by jgandi on 16/5/16.
 */

angular.module('goldmining')
.config(function ($routeProvider){
        $routeProvider.
            when('/equipments', {
                templateUrl: 'templates/equipments/list.html',
                controller: 'EquipmentListCtrl'
            }).
            when('/equipments/:equipmentId', {
                templateUrl: 'templates/equipments/detail.html',
                controller: 'EquipmentDetailCtrl'
            }).
            when('/materials', {
                templateUrl: 'templates/materials/list.html',
                controller: 'MaterialListCtrl'
            }).
            when('/materials/:materialId', {
                templateUrl: 'templates/materials/detail.html',
                controller: 'MaterialDetailCtrl'
            }).
            when('/locations', {
                templateUrl: 'templates/locations/list.html',
                controller: 'LocationListCtrl as locCtrl'
            }).
            when('/users', {
                templateUrl: 'templates/users/list.html',
                controller: 'UserListCtrl as userCtrl'
            }).
            otherwise({
                redirectTo: '/equipments'
            });
    });