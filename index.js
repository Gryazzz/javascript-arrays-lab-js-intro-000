const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push (name);
}
<<<<<<< HEAD

function destructivelyPrependKitten(name) {
  kittens.unshift (name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop ();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift ();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice (0, kittens.length-1);
}

function removeFirstKitten() {
  return kittens.slice (1);
}
=======
>>>>>>> a8349b9c9927997c3d2b2027480345e5ed28d803
