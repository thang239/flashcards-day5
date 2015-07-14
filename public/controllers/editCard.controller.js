// console.log('controller')

app.controller('editCard',function(FlashCardFactory,$scope,$http,$stateParams){

	// console.log('Go here')
	// console.log($scope)
	// console.log($stateParams.card)
	FlashCardFactory.getOneCard($stateParams.id).then(function(card){
		// console.log(card);
		$scope.editCard = card;
	});

	$scope.editCardFnc = function(editCard){
      // $scope.editCard = $scope.theCard;
      $http.put('/cards'+'/'+$scope.editCard._id,editCard)
        .success(function(card){
          // $scope.edit=false;          
          // console.log($scope.editCardForm);
          // if($scope.edit){
          //   $scope.editCardForm.removeClass('ng-hide')
          // }
        })
  	}



})