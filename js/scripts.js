// Back End

// Pizza Object
function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.price = NaN;
}

// Pizza Sizes
var small = {diameter: 8, basePrice: 7}
var medium = {diameter: 12, basePrice: 10}
var large = {diameter: 18, basePrice: 15}
var xl = {diameter: 23, basePrice: 19}

var sizes = {"small":small, "medium":medium, "large":large, "xl":xl}

// Pizza crusts
var regular = {priceFactor: 1}
var wheat = {priceFactor: 1.1}
var glutenFreeCardboard = {priceFactor: 1.5}

var crusts = {"regular":regular, "wheat":wheat, "glutenFreeCardboard":glutenFreeCardboard}

// Pizza toppings


// Front End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  })
});
