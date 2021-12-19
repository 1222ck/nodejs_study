const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');

readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss);
});
// 스트림을 이용한 파일 복사는 용량이 크게 늘어나지 않는다. 큰 파일을 조각내어 작은 버퍼 단위로 옮겼기 때문이다. 
// 이렇게 스트림을 사용하면 효과적으로 데이터를 전송할 수 있다. 동영상 같은 큰 파일들을 전송할 때 이러한 이유로 스트림을 사용한다. 