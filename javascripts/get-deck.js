define(function(require) {
  var $ = require('jquery');
  var Q = require("q");

  return function() {
    var deferred = Q.defer();
    $.ajax({
      url: "http://deckofcardsapi.com/api/deck/new/shuffle/"
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