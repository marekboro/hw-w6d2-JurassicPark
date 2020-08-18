const Park = function (name, ticketPrice, dino_collection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dino_collection = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dino_collection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    let new_array = []
    for (dino of this.dino_collection){
        if (dino !== dinosaur){
            new_array.push(dino);
        }
    } 
    this.dino_collection = new_array;
}
Park.prototype.removeDinosaur1 = function(dinosaur){
    return;
}







module.exports = Park;