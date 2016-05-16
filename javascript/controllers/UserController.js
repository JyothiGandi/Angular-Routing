/**
 * Created by jgandi on 16/5/16.
 */

angular.module('User',[])

.controller('UserListCtrl',function(){
        this.users = [
            {
                name : 'Jyo'
            },
            {
                name : 'Anu'
            }
        ]
    })