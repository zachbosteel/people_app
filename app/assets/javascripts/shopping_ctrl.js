(function(){

  angular.module("app").controller("shopping-ctrl", function($scope){

    $scope.subtotal = 0
    $scope.tax = 0
    $scope.total = 0

    $scope.products = [
      {name: "Product 1",
      price: Math.round(10*100)/100,
      tax: (Math.round((10.00 * 0.09)*100)/100),
      description: "This is a thing you can have."},
      {name: "Product 2",
      price: 145.92,
      tax: (Math.round((145.92 * 0.09)*100)/100),
      description: "This is a thing you can have."},
      {name: "Product 3",
      price: 2.33,
      tax: (Math.round((2.33 * 0.09)*100)/100),
      description: "This is a thing you can have."},
      {name: "Product 4",
      price: 89.99,
      tax: (Math.round((89.99 * 0.09)*100)/100),
      description: "This is a thing you can have."}
    ];

    $scope.cartedProducts = [];

    $scope.addToCart = function(product){
      $scope.cartedProducts.push(product);
      $scope.subtotal += product.price;
      $scope.tax += product.tax;
      $scope.total = Math.round(($scope.total + (product.price + product.tax))*100)/100;
    };

    $scope.removeProduct = function(product){
      var index = $scope.cartedProducts.indexOf(product);
      $scope.cartedProducts.splice(index, 1);

      $scope.subtotal = Math.round(($scope.subtotal -product.price)*100)/100;
      $scope.tax = Math.round(($scope.tax-product.tax)*100)/100;
      $scope.total = Math.round(($scope.total - (product.price + product.tax))*100)/100;

    };

  });
}());