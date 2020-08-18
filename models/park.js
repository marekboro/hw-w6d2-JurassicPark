const Park = function (name, ticketPrice, dino_collection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dino_collection = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dino_collection.push(dinosaur);
}
// Park.prototype.removeDinosaur = function(dinosaur){
//     new_array = []
//     for (dino of this.collection){
//         if (!dinosaur){
//             new_array.push(dino);
//         }
//     } 
//     this.collection = new_array;
// }
// Park.prototype.removeDinosaur1 = function(dinosaur){
//     return;
// }







module.exports = Park;