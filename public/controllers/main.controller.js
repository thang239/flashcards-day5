app.controller('MainCtrl', function($scope, FlashCardFactory,$state) {
  // make a query
  $scope.hide = true;
  FlashCardFactory.getFlashCards()
    .then(function(cards) {
      $scope.flashCards = cards;
      // console.log($scope.flashCards);
    })
    .catch(function(e) {
      console.log('e', e);
    })
  // console.log('123')
  $scope.categories = FlashCardFactory.categories;

  $scope.activeCat = null;

  $scope.filterByCategory = function(cat) {
    $scope.activeCat = cat;
    $scope.flashCards = null;
    FlashCardFactory.getFlashCards(cat)
      .then(function(cards) {
        $scope.flashCards = cards;
      });
  };

  $scope.$on('addedCard', function(e, card) {
    if ($scope.activeCat === card.category) {
      $scope.flashCards.push(card);
    }
  });
  // $state.transitionTo('flashCardView.manageCardView')
})