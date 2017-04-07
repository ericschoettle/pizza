// Back End
function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.price = NaN;
}


// Front End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  })
});
