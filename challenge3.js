//Goal of this challenge is to return strings from an array that begin with "t"
//create an array
//create a for statement to loop though the array
// create an if that returns and prints only the strings that contain start with "t"

var animals = ["tiger", "llama", "turtle", "dog", "cow"]

for (var i = 0; i < animals.length; i++) {
  if (animals[i].startsWith("t"))
  console.log(animals[i]);
}

