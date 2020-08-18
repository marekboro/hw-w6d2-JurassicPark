

const JurassicPark = function (name,ticket_price,collection){
    this.name = name;
    this.ticket_price = ticket_price;
    this.collection = [];
}

JurassicPark.prototype.addDinosaur = function(dinosaur){
    this.collection.push(dinosaur);
}
JurassicPark.prototype.removeDinosaur = function(dinosaur){
    new_array = []
    for (dino of this.collection){
        if (!dinosaur){
            new_array.push(dino);
        }
    } 
    this.collection = new_array;
}
JurassicPark.prototype.removeDinosaur1 = function(dinosaur){
    return;
}
