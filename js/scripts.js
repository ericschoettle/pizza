// Back End

// Pizza Object
function Pizza(size, crust, myToppings) {
  this.size = size;
  this.crust = crust;
  this.myToppings = myToppings;
  this.pizzaPrice = 0;
}

Pizza.prototype.calculatePrice = function() {
  var toppingsPriceTotal = 0
  for (topping in this.myToppings) {
    toppingsPriceTotal +=1
  }
  var pizzaPrice = this.size.basePrice * this.crust.priceFactor + toppingsPriceTotal
  this.pizzaPrice = Math.ceil(pizzaPrice)
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
console.log(crusts)

// Pizza toppings
function Topping(name, price) {
  this.name = name;
  this.price = price;
}

var toppings = {}
var toppingsArray = [["redOnions", 0.75],
                  ["bellPeppers", 0.75],
                  ["jalepenos", 0.75],
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

// Front End, ish
function makeRadioButtons(name, object) {
  for (key in object) {
    $("#" + name).append(
      "<div class='radio'>" +
        "<label><input type='radio' name='" + name + "' value='" + key + "'>" + camelCaseToTitle(key) +  "</label>" +
      "</div>")
  }
}

function makeCheckBoxes(name, object) {
  for (key in object) {
    $("#" + name).append(
      "<div class='checkbox'>" +
        "<label><input type='checkbox' name='" + name + "' value='" + key + "'>" + camelCaseToTitle(key) + "</label>" +
      "</div>")
  }
}

function camelCaseToTitle(string) {
  var idx = findAllIndicies(string, /[A-Z]/g)
  var words = splitOnIndex(string, idx)
  var withSpaces = words.join(" ")
  var withCaps = capitalizeFirstLetter(withSpaces)
  return withCaps
}

function findAllIndicies(string, regExp) {
  var indicies = [];

  while ((index = regExp.exec(string)) !== null) {
    indicies.push(index.index)
  }
  return indicies
}

function splitOnIndex (string, idxArray) {
  var firstWord = string.substring(0, idxArray[0])
  var words = []
  for (var i = 1; i <= idxArray.length; i++) {
    if (i < idxArray.length) {
      words.push(string.substring(idxArray[i-1], idxArray[i]))
    } else {
      words.push(string.substring(idxArray[i-1]))
    }
  }
  words.unshift(firstWord)
  return words
}

function capitalizeFirstLetter (string) {
  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string
}

$(document).ready(function() {
  makeRadioButtons("crusts", crusts)
  makeRadioButtons("sizes", sizes)
  makeCheckBoxes("toppings", toppings)

  $("form").submit(function(event) {
    event.preventDefault();

    var myPizzaSize = $("input:radio[name=sizes]:checked").val();
    var myPizzaCrust = $("input:radio[name=crusts]:checked").val();
    var myPizzaToppings = {};
    $("input:checkbox[name=toppings]:checked").each(function() {
      myPizzaToppings[$(this).val()] = toppings[$(this).val()]
    });
    var myPizza = new Pizza(sizes[myPizzaSize], crusts[myPizzaCrust], myPizzaToppings)
    myPizza.calculatePrice()
    $(".container").append("<h2>Your Pizza will cost: $" + myPizza.pizzaPrice + ".00</h2>")
  });
});
