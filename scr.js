const fs = require('fs');

const createLargeObject = () => {
  let obj = {};
  let str = 'a'.repeat(1024 * 500); // 500KB string

  // Fill the object with the 500KB string 10 times to create a 5000KB object
  for (let i = 0; i < 4; i++) {
    obj[`key${i}`] = str;
  }

  return obj;
}

// Create an array of 100 50KB objects to get a 5000KB (or approximately 5MB) JSON
let largeArray = [];
for (let i = 0; i < 10; i++) {
  largeArray.push(createLargeObject());
}

let largeJson = JSON.stringify(largeArray);

// Save the JSON to a file
fs.writeFile('db.json', largeJson, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});