const fs = require('fs');

const rs = fs.createReadStream('./Files/lorem.txt', { encoding: 'utf8' });
const ws = fs.createWriteStream('./Files/new-lorem.txt');

rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
});

rs.on('end', () => {
    ws.end();
});
