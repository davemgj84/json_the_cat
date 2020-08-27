// Require request:
const request = require('request');

// allow for user input to query particular breed:
const userInput = process.argv[2];

const breedRequest = () => {
  if (userInput === undefined) {
    console.log("Please enter breed name.");
  } else {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
      // Handle any potential errors:
      if (error) {
        console.log("ERROR!", error);
        return;
      }
      // Turns the body(string) into JSON readable object - held within variable "data".
      const data = JSON.parse(body);
      if (data.length === 0) { // if giberish || not a breed:
        console.log("Breed does not exist.");
      } else {
        // print out the first entry in the data array, description, to the console.
        console.log(data[0].description);
      }
    });
  }
};

breedRequest();