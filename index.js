const app = "I don't do much."

function kittens(name){
  var kittens= ["milo","Otis","Garfield"];
  return kittens;
}

kittens("milo","Otis","Garfield");

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
  return kittens;
}

kittens("milo","Otis","Garfield");

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

kittens("milo","Otis","Garfield");

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}

kittens("milo","Otis","Garfield");

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

kittens("milo","Otis","Garfield");

function appendKitten(name) {
Kitten("Broom");
return Kitten;
}
