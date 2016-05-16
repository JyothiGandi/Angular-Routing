/**
 * Created by jgandi on 16/5/16.
 */

angular.module('goldmining',[/*'ngRoute',*/'ui.router','Equipment','Material','Location','User'])

    .controller('PanelController', function (){
        this.tab = 1;
        this.setTab = function(tabValue){
            this.tab = tabValue;
        };
        this.isTabSelected = function(checkTab){
            return this.tab === checkTab;
        }
    })


