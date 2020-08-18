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

Park.prototype.allFromSameSpecies = function(species_name){
  allFromOneSpecies = []
  for (dino of this.dino_collection){
    if (dino.species_name === species_name){
      allFromOneSpecies.push(dino)
    }
  }
  return allFromOneSpecies;
}









module.exports = Park;