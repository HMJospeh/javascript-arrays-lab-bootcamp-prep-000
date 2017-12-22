const app = "I don't do much."
var kittens= ["milo","Otis","Garfield"];
function kittens(name){
  return kittens;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name){
  return [name,...kittens]
}

function removeLastKitten() {
kittens.slice(3);
  return kittens; 
}
