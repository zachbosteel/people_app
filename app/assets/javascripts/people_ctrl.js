(function(){

  angular.module("app").controller("people-ctrl", function($scope){

    $scope.people = [
      {name: "Bob",
        bio: "Bob is great because quinioa polaroid kale deathtrap bicycle.",
      bioShown: false},
      {name: "Mustafa",
        bio: "Mustafa once ruled the plains of Africa, but after a run-in with a herd of gazelle, he now rules the sky instead.",
      bioShown: false},
      {name: "Clark Kent",
        bio: "A dedicated, super-genius reporter with remarkable physical fortitude who is just errible at disguises.",
      bioShown: false}
      ];

    $scope.count = $scope.people.length

    $scope.toggleBio = function( person){
      var index = $scope.people.indexOf(person);
     if (!$scope.people[index].bioShown){
        $scope.people[index].bioShown = true;
     } else if ($scope.people[index].bioShown){
        $scope.people[index].bioShown = false;
     };
    };

    $scope.isShown = function(person){
      var index = $scope.people.indexOf(person);
      if ($scope.people[index].bioShown){
        return true;
      };
    };

    $scope.addPerson = function(name, bio){
      var newPerson = {
        name: name,
        bio: bio,
        bioShown: false
      };
      $scope.people.push(newPerson);
      $scope.count = $scope.people.length
    };

    $scope.deletePerson = function(person){
        var index = $scope.people.indexOf(person);
        $scope.people.splice(index, 1);
        $scope.count = $scope.people.length;
    }

    window.scope = $scope;
  })
}())