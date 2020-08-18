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
  let park_collection = [];

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
    park_collection.push.dinosaur1;
    park_collection.push.dinosaur2;
    park_collection.push.dinosaur3;
    park_collection.push.dinosaur4;
    park_collection.push.dinosaur5;
    park_collection.push.dinosaur6;
    park_collection.push.dinosaur7;
    park_collection.push.dinosaur8;
    park_collection.push.dinosaur9;
    park_collection.push.dinosaur10;
    park_collection.push.dinosaur11;
    park_collection.push.dinosaur12;
    thePark = new Park("Jurassic parque", 120, park_collection);

  })

  it('should have a name', function () {
    const actual = thePark.name;
    assert.deepEqual(actual, "Jurassic parque");
  });

  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
