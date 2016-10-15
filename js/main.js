
function csvJSON(csv){

  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  //return result; //JavaScript object
  return result; //JSON
}

var SearchApp = angular.module('SearchApp', []);
SearchApp.controller('ctrl2', ['$scope', function ($scope) {
    $scope.processFiles = function (element) {
      var file = element.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        // Need to notify angular of this event using $apply
        $scope.$apply(function() {
         // var output = document.getElementById("fileOutput");
          $scope.output = e.target.result;
          jsonner = csvJSON(e.target.result);
          console.log(jsonner);
          $scope.names = jsonner;
        });
      };

      reader.readAsText(file);
    };


}]);
