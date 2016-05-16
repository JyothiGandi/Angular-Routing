/**
 * Created by jgandi on 16/5/16.
 */

angular.module('Location',[])

.controller('LocationListCtrl',function(){
        this.locations = [
            {
                name : 'Vizag'
            },
            {
                name : 'Hyderabad'
            }
        ]
    })