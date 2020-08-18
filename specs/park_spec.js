const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let dinosaur6;
  let dinosaur7;
  let dinosaur8;
  let dinosaur9;
  let dinosaur10;
  let dinosaur11;
  let dinosaur12;
  let thePark;
  let parkCollection =[];

  beforeEach(function () {
    
    dinosaur1 = new Dinosaur("T-Rex", "carnivore", 52);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 16);
    dinosaur3 = new Dinosaur("Brachiosaurus", "herbivore", 21);
    dinosaur4 = new Dinosaur("Dilophosaurus", "carnivore", 22);
    dinosaur5 = new Dinosaur("Gallimimus", "omnivore", 11);
    dinosaur6 = new Dinosaur("Parasaurolophus", "herbivore", 12);
    dinosaur7 = new Dinosaur("Triceratops", "herbivore", 36);
    dinosaur8 = new Dinosaur("Mamenchisaurus", "herbivore", 31);
    dinosaur9 = new Dinosaur("Pachycephalosaurus", "omnivore", 19);
    dinosaur10 = new Dinosaur("Compsognathus", "carnivore", 14);
    dinosaur11 = new Dinosaur("Ankylosaurus", "herbivore", 13);
    dinosaur12 = new Dinosaur("Apatosaurus", "herbivore", 28);
    

    thePark = new Park("Jurassic parque", 120, parkCollection);
    
    thePark.addDinosaur(dinosaur2);
    thePark.addDinosaur(dinosaur3);
    thePark.addDinosaur(dinosaur4);
    thePark.addDinosaur(dinosaur5);
    thePark.addDinosaur(dinosaur6);
    thePark.addDinosaur(dinosaur7);
    thePark.addDinosaur(dinosaur8);
    thePark.addDinosaur(dinosaur1);
    thePark.addDinosaur(dinosaur9);
    thePark.addDinosaur(dinosaur10);
    thePark.addDinosaur(dinosaur11);
    thePark.addDinosaur(dinosaur12);
    
    
  })

  it('should have a name', function () {
    const actual = thePark.name;
    assert.deepEqual(actual, "Jurassic parque");
  });

  it('should have a ticket price', function () {
    const actual = thePark.ticketPrice;
    assert.deepEqual(actual, 120);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = thePark.dino_collection.length;
    assert.equal(actual, 12);
  });

  it('should be able to add a dinosaur to its collection', function(){
    dino13 = new Dinosaur("Denver","hugs",5);
    thePark.addDinosaur(dino13);
    const actual = thePark.dino_collection.length;
    assert.equal(actual, 13);
  });
    

  it('should be able to remove a dinosaur from its collection', function(){
    thePark.removeDinosaur(dino13);
    const actual = thePark.dino_collection.length;
    assert.equal(actual, 12);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = thePark.parkStar();
    assert.equal(actual, dinosaur1 );
  });


  it('should be able to find all dinosaurs of a particular species',function(){
    list = thePark.allFromSameSpecies("Mamenchisaurus");
    const actual = list;
    assert.deepEqual(actual, [dinosaur8]);

  });

  it('should be able to calculate the total number of visitors per day',function(){
    const actual = thePark.visitorsPerDay();
    assert.deepEqual(actual, 275);
  });

  it('should be able to calculate the total number of visitors per year',function(){
    const actual = thePark.visitorsPerYear();
    assert.deepEqual(actual, 100375);
  });

  it('should be able to calculate total revenue for one year');

});
