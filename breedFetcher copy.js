const args = process.argv.slice(2);
const breed = args[0];

const request = require('request');

const breedFetcher = (breedName) => {
request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  let data = JSON.parse(body);
  let wholeObject = data[0];
  let description = wholeObject.description
  
  if (breed === "Siberian") {
    console.log(description);
  } else {
    console.log("ERROR: Breed not found");
  }
});
}



