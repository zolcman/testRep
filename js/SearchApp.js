
var SearchApp = angular.module('SearchApp',['infinite-scroll']);
    
SearchApp.controller('ctrl2', function($scope, $http) {
  $http.get('items.json')
       .then(function(res){
          $scope.items = res.data; 
          $scope.showdescr = function(descr){
    alert(descr);
       
  };     
  
  
   $scope.loadMore = function() {
                 var last = $scope.items[$scope.items.length - 1];
                console.log(last);
                for(var i = 1; i <= 8; i++) {
                 $scope.items.push(last + i);
    }
  };
                var pagesShown = 1;
                var pageSize = 3;

                $scope.paginationLimit = function (data) {
                    return pageSize * pagesShown;
                };
                $scope.hasMoreItemsToShow = function () {
                    return pagesShown < ($scope.items.length / pageSize);
                };
                $scope.showMoreItems = function () {
                    pagesShown = pagesShown + 1;
                };
               

                                        
  $( document ).ready(function() {
      
      $("#change").click(function() {
          $("#loadmore").toggle();
          $("#infinite").toggle();
         $("#btnmore").toggle(); 
      });
        });
        });
        
});




