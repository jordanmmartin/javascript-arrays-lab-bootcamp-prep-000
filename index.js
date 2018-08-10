// Add your functions and code here
var kittens = [
    'Milo',
    'Otis',
    'Garfield'
  ]
  
  function destructivelyAppendKitten(name) {
    var newKittens = [...kittens, name]
    return newKittens
  }