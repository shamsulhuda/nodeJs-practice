const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// });
// push data to another file
// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });

// Simple method

ourReadStream.pipe(ourWriteStream);
