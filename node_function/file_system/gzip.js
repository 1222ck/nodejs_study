// pipe는 스트림 사이에 여러 번 연결할 수 있다. 

// 파일을 읽은 후 gzip 방식으로 압축하는 코드
const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip(); // 스트림을 지원하는 메서드이다. readStream과 wroteStream 중간에서 파이핑을 할 수 있다. 버퍼 데이터가 전달되다가 gzip 압축을 거친 후 파일로 써진다.
const writeStream = fs.createWriteStream('./readme4.txt.gz'); // readme4.txt.gz 파일이 생성된다. 
readStream.pipe(zlibStream).pipe(writeStream);
