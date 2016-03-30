'use strict';

let recipe = {
  name: "Curried Monkey Brains a la Mode",
  author: "Nick",
  steps: [
    "Sautee monkey brains with curry powder.",
    "Top with chocolate ice cream.",
    "Garnish with cilantro."
  ],
  ingredients: [
    {name:"monkey brains",
      unit:"heads", amt:1, notes:"Use fresh brains, coarsely chopped.", inStock: false},
    {name:"curry powder",
      unit:"Tbs", amt:2, notes:"", inStock: true},
    {name:"vanilla ice cream",
      unit:"scoops", amt:4, notes:"", inStock: true},
    {name:"cilantro",
      unit:"bunches", amt:1, notes:"Coarsely chopped, sprinkled attractively.", inStock: true}
  ],
  serves: 4,
  printIngreds: function(multiplier) {
    for (var i = 0; i < this.ingredients.length; i++) {
      console.log(this.ingredients[i].amt * (multiplier || 1) + " " + this.ingredients[i].unit + " of " + this.ingredients[i].name);
    }
  },
  groceryNeeds: function() {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (!this.ingredients[i].inStock) {
        console.log("You need to buy some " + this.ingredients[i].name + "!");
      };
    }
  }
}

recipe.printIngreds(3);
recipe.groceryNeeds();
