app.factory('FlashCardFactory', function($http) {
  return {
    getFlashCards: function(cat) {
      var config = {};
      if (cat) config.params = {
        category: cat
      };
      return $http.get('/cards', config)
        .then(function(res) {
          return res.data;
        });
    },
    create: function(cardData) {
      return $http.post('/cards', cardData)
        .then(function(res) {
          return res.data;
        });
    },
    // Card: function () {
    //   this.answers = [{correct: true}, {correct: false}, {correct: false}];
    // }
    categories: [
      'MongoDB',
      'Express',
      'Angular',
      'Node'
    ],
    getOneCard : function (id){
      return $http.get('/cards/'+id)
      .then(function (card){
        return card.data;
      })
    }
  }
})