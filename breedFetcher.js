// Require request:
const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // Handle any potential errors:
    if (error) {
      callback(error, null);
    }
    // Turns the body(string) into JSON readable object - held within variable "data".
    const data = JSON.parse(body);
    if (data.length === 0) { // if giberish || not a breed:
      callback();
    } else {
      // print out the first entry in the data array, description, to the console.
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };