// const args = process.argv.slice(2);
// const breed = args[0];

const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  //**NOTE - put breedName
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    let data = JSON.parse(body);
    let breed = data[0];
    // let description = breed.description
  
    if (breed) {
      // console.log(description);
      callback(null, breed.description);
    } else {
      // console.log("ERROR: Breed not found");
      callback("breed not found");
    }
  });
};

module.exports = {fetchBreedDescription};



