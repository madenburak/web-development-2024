import generateName from "sillyname";
import superheroes from "superheroes";

var randomName = generateName();
var randomSuperHero = superheroes.random();

console.log(
  "My name is " + randomName + ", also they say to me " + randomSuperHero
);
