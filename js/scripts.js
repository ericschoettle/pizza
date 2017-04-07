// Back End

// Pizza Object
function Pizza(size, crust, myToppings) {
  this.size = size;
  this.crust = crust;
  this.myToppings = myToppings;
  this.price = NaN;
}

// Pizza Sizes
function Size(name, diameter, basePrice) {
  this.name = name;
  this.diameter = diameter;
  this.basePrice = basePrice
}
var sizes = {}
var sizesArray = [["small", 8, 7],
                  ["medium", 12, 10],
                  ["large", 18, 15],
                  ["xl", 23, 19]]

sizesArray.forEach(function(size) {
  var pizzaSize = new Size(size[0], size[1], size[2])
  sizes[pizzaSize.name] = pizzaSize
});

// Pizza crusts
var regular = {name: regular, priceFactor: 1}
var wheat = {name: wheat, priceFactor: 1.1}
var glutenFreeCardboard = {name: glutenFreeCardboard, priceFactor: 1.5}

var crusts = {"regular":regular, "wheat":wheat, "glutenFreeCardboard":glutenFreeCardboard}

// Pizza toppings
function Topping(name, price) {
  this.name = name;
  this.price = price;
}
var toppings = {}
var toppingsArray = [["redOnions", .75],
                  ["bellPeppers", .75],
                  ["jalepenos", .75],
                  ["freshMozzerella", 1],
                  ["ricotta", 1],
                  ["feta", 1],
                  ["salami", 1.5],
                  ["chicken", 1.5],
                  ["italianSausage", 1.5]]

toppingsArray.forEach(function(topping) {
  var pizzaTopping = new Topping(topping[0], topping[1])
  toppings[pizzaTopping.name] = pizzaTopping
});

console.log(toppings)
// Front End
// console.log(sizes.small)
// var pizza = new Pizza(sizes.small, crusts.regular, "pepperoni")
// console.log(pizza)

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  })
});
