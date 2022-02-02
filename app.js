(function (){
'use strict'
   angular.module("first", [])
   .controller("firstController",firstController);

   firstController.$inject = ['$scope'];
   function firstController($scope)
   {
        $scope.name = "serhiy";
        $scope.saym = function(){
            return "asa";
        };
        $scope.clickev = function(){
            var arrayofelemnt = ($scope.name).split(',');
            if(arrayofelemnt)
            {
                $scope.resutl = "Very nice";
            }
            else{
                $scope.resutl = "stop eating";
            }
        }
   }
})();