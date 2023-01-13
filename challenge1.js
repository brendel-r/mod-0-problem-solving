//Goal of this challenge is to have a return of strings with only 4 characters
//create an array
//create a for  to loop though the array
// create an if that returns and prints only the strings that contain 4 characters

var spellingWords = ["Hello", "Luck", "Happy", "Love", "Sold"]

for (var i = 0; i < spellingWords.length; i++) {
  if(spellingWords[i].length === 4)
  console.log(spellingWords[i]);
}
