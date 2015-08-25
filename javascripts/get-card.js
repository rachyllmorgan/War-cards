define(function(require) {
  var $ = require("jquery");
  var Q = require("q");

  // Pass in player deck ID
  return function(id) {
    var deferred = Q.defer();
    $.ajax({
      url: "http://deckofcardsapi.com/api/deck/" + id + "/draw/?count=1"
    })
    .done(function(json_data) {
      deferred.resolve(json_data);
      
    })

    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });

    return deferred.promise;
  };
});