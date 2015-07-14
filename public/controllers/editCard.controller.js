// console.log('controller')

app.controller('editCard',function(FlashCardFactory,$scope,$http,$stateParams){

	console.log('Go here')
	// console.log($scope)
	console.log($stateParams)
	FlashCardFactory.getOneCard($stateParams.id).then(function(card){
		// console.log(card);
		$scope.editCard = card;
		console.log(card);
	});

	$scope.editCardFnc = function(editCard){
      // $scope.editCard = $scope.theCard;
      $http.put('/cards'+'/'+$scope.editCard._id,editCard)
        .success(function(card){

        	window.location.href = "/"
          // $scope.edit=false;          
          // console.log($scope.editCardForm);
          // if($scope.edit){
          //   $scope.editCardForm.removeClass('ng-hide')
          // }
        })
  	}

  	// $scope.deleteCard = function(){
  	// 	$http.delete('/delete/'+$scope.editCard._id,editCard)
  	// 		.success(function(){
  	// 			window.location.href = "/"
  	// 		})
  	// }
  	// $scope.redirect = function(){
  	// 	window.location.href = "/";
  	// }
})