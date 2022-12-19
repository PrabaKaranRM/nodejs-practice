const fs = require('fs');
const file = fs.createReadStream("samp.txt")

file.on('readable', function(){
  let summa = null;
  while(null!==(summa=file.read())){
  console.log(summa.toString());
  }
})