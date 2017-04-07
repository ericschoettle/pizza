
# _Pizza_

#### _Website on which to order a pizza, 4/7/17_

#### By _**Eric Schoettle**_

## Description

_This website allows the user to order pizza. The user can select the pizza size, crust, toppings, and the number of pizzas, and the website will record the above and calculate a price for the pizza. Multiple pies are also an option._

## Setup/Installation Requirements

_Just download the folder and open index.html in your favorite web browser. Unless that's something incredibly obscure or outdated. Then get a normal web browser._

## Specifications

* _Constructor will make a pizza object with toppings, crust, size, and price traits_

* _Object of pizza sizes will be created_
  * _eg. sizes = small, medium, large, xl_
* _Pizza sizes will be objects with associated diameters and pricing_
  * _eg small.diameter = 10 inch, small.price = 8_
* _The Pizza object will be able to get a size object from the pizza sizes object_
    _eg pizza.size = {}_
*               _&              => pizza.size = medium_
    _sizes.medium is an object_

* _Object of pizza crusts will be created_
  * _eg. crusts = thin, whole wheat, gluten-free rubber_
* _Pizza crusts will be objects with associated pricing surcharges_
  * _eg wheat = +10%_
* _The Pizza object will be able to get a crust object from the pizza crusts object_
    _eg pizza.crust = {}_
*               _&              => pizza.crust = wheat_
    _crusts.wheat_

* _An object of all topping choices will be created_
* _An object of pizza toppings will be created inside of pizza_
* _pizza.toppings will be populated with selections from the topping choices object_

* _Pizza Price prototype will add up prices of size, crust, and toppings_
* _Order object will contain pizza objects, an address object, delivery method (pick up vs. delivery), and a total price_
* _Order object will contain a totalPrice prototype to add up the price of the order_
* _UI will allow users to select a pizza size from a pull-down menu_
* _UI will allow users to select a pizza size from a pull-down menu_
* _UI will allow users to click on toppings to add them to their pizza_
* _UI will show pizza price to user_
* _UI will prompt user for address and delivery method of pizza_
* _UI will present a receipt for user_

## Known Bugs

_There are no known bugs at this time_

## Technologies Used

_This website was built using Javascript, Jquery, and Bootstrap_

### License

*This software is licensed under the MIT license*

Copyright (c) 2016 **_Eric Schoettle_**
