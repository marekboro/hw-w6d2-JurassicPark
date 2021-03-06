const Dinosaur = require("./dinosaur");

const Park = function (name, ticketPrice, dino_collection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dino_collection = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dino_collection.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
  let new_array = []
  for (dino of this.dino_collection) {
    if (dino !== dinosaur) {
      new_array.push(dino);
    }
  }
  this.dino_collection = new_array;
}
Park.prototype.parkStar = function () {
  // loop through all the dinos
  // start with first dino
  // save it to the top_dino
  // go to next dino, if new dino has a higher view thing, overwrite dino
  var top_dino = this.dino_collection[0];

  for (i = 0; i < this.dino_collection.length; i++) {
    if (top_dino.guestsAttractedPerDay < this.dino_collection[i].guestsAttractedPerDay) {
      top_dino = this.dino_collection[i]
    }

  }
  return top_dino;
}

Park.prototype.allFromSameSpecies = function (a_name) {
  dinoList = [];
  for (dino of this.dino_collection) {
    if (dino.species === a_name) {
      dinoList.push(dino);
    }
  }
  return dinoList;
}

Park.prototype.visitorsPerDay = function () {
  total = 0;
  for (dino of this.dino_collection) {
    total += dino.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.visitorsPerYear = function () {
  //const value = this.visitorsPerDay();
  //return value; 
  return this.visitorsPerDay() * 365
}

Park.prototype.yearlyIncome = function () {
  return this.visitorsPerYear() * this.ticketPrice;
}

Park.prototype.removeSpecies = function(species){
  let new_array =[];
  for(dino of this.dino_collection) {
  if (dino.species !== species) {
    new_array.push(dino);
  }
}
this.dino_collection = new_array;
}


Park.prototype.listByDiet = function(){
  // var carnivore_count = 0;
  // var herbivore_count = 0;
  // var omnivore_count = 0;
  // var carnivore= 0;
  // var herbivore= 0;
  // var omnivore= 0;

  var something = 
    {
    carnivore:0,
    herbivore:0,
    omnivore:0
  };
  // for(dino of this.dino_collection) {
  //   if (dino.diet === "carnivore"){
  //     something.carnivore_count +=1;
  //   }
  //   if (dino.diet === "herbivore"){
  //     something.herbivore_count +=1;
  //   }
  //   if (dino.diet === "omnivore"){
  //     something.omnivore_count +=1;
  //   }  
    
  // }
  for(dino of this.dino_collection) {
    if (dino.diet === "carnivore"){
      something.carnivore +=1;
    }
    if (dino.diet === "herbivore"){
      something.herbivore+=1;
    }
    if (dino.diet === "omnivore"){
      something.omnivore +=1;
    }  
    
  }
  return something;

}











module.exports = Park;