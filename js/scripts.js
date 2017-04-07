// Back End
function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.price = NaN;
}
debugger
var small = {diameter: 8, price: 10}
var medium = {diameter: 12, price: 14}
var large = {diameter: 18, price: 19}
var xl = {diameter: 23, price: 24}

var sizes = {"small":small, "medium":medium, "large":large, "xl":xl, }

// Front End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  })
});
