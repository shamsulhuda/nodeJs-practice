const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Buffer form</title></head>');
        res.write(
            '<body><form method="post" action="/about"><textarea name="readData"></textarea><button type="submit">Button</button></form></body>',
        );
        res.end();
    } else if (req.url === '/about' && req.method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk);
        });
        res.write('Thanks for submiting data...');
        res.end();
    } else {
        res.write('Not Found');
        res.end();
    }
});
server.listen(3000);

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

ourReadStream.on('data', (data) => {
    console.log(data.toString());
});
