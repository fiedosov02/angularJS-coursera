(function (){
    'use strict'
       angular.module("first", [])
       .controller("shopcontroller",shopcontroller);
    
       shopcontroller.$inject = ['$scope'];
       function shopcontroller($scope)
       {
           $scope.already = [];
            $scope.items = {name:"cookies", bags: 20}, {name:'chips', bags:20}
            $scope.buy = function(index){
                items.remove(index);
                already.push(index);
            }
           
       }
    })();