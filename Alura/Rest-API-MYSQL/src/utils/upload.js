const fs = require('fs');

fs.createReadStream('../assets/pinscher.jpg')
  .pipe(fs.createWriteStream('../assets/pinscher-stream.jpg'))
  .on('finish', () => {
    console.log('Imagem foi escrita com sucesso')
  })