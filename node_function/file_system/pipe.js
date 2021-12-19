const fs = require('fs');

// 미리 읽기 스트림과 쓰기 스트림을 만들어둔 후 두 개의 스트림 사이를 pipe 메서드로 연결하면 저절로 데이터가 writeStream으로 넘어간다.
const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt'); // readme4와 같은 내용의 writeme3가 생성되었다. 
readStream.pipe(writeStream);
