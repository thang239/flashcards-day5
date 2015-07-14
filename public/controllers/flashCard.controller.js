app.controller('FlashCardCtrl', function ($scope, ScoreFactory) {
  $scope.answered = false;
  $scope.answeredCorrectly = null;

  console.log('Hello')
  $scope.answerQuestion = function(answer) {
    if ($scope.answered) {
      return;
    }
    $scope.answered = true;
    if (answer.correct) {
      ScoreFactory.correct++;
      $scope.feedback = "Correct!";
      $scope.answeredCorrectly = true;
    } else {
      ScoreFactory.incorrect++;
      $scope.feedback = "Nice try";
    }
  };

    
  })