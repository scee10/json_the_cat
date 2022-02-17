const args = process.argv.slice(2)
const breed = args

const request = require('request');

request('https://api.thecatap.com/v1/breeds/search?q=sib', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  let data = JSON.parse(body);
  let wholeObject = data[0];
  
  if(breed === "Siberian") {
    console.log(wholeObject.description);
  } else {
   throw error ("Breed not found");
  }
 });




