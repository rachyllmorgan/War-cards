define (["jquery", "q"], function($, Q) {

  return function() {  
    var deferred = Q.defer();
    console.log(zip);


    $.ajax ({
      url: "http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1"
    })
    .done(function(data) {
      console.log(data);
      deferred.resolve(data);
    })
    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });
    
    return deferred.promise;
  };
});