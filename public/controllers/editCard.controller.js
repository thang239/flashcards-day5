app.controller('editCard',function($scope,$http){
	$scope.editCardFnc = function(editCard){
      // $scope.editCard = $scope.theCard;
      $http.put('/cards'+'/'+$scope.theCard._id,editCard)
        .success(function(card){
          $scope.edit=false;          
          // console.log($scope.editCardForm);
          if($scope.edit){
            $scope.editCardForm.removeClass('ng-hide')
          }
        })
  	}



})