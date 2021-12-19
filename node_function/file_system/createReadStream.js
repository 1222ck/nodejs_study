// 버퍼의 문제점을 해결하기 위해서 버퍼의 크기를 작게 만든 후 여러 번으로 나눠 보내는 방식이 등장했다. 
// 예를 들면 버퍼 1MB를 만든 후 100MB 파일을 백 번에 걸쳐서 나눠 보내는 것이다. -> 이를 편하게 만든 것이 스트림이다

const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // createReadStream은 읽기 스트림을 만든다. 첫 번째 인수로 읽을 파일 경로를 넣고 두 번째 인수는 옵션 객체인데 highWaterMark라는 옵션이 버퍼의 크기를 정할 수 있는 옵션이다. 16B로 설정했다.(기본값은 64KB)
const data = [];

readStream.on('data', (chunk) => { // readStream은 이벤트 리스너를 붙여서 사용한다. 보통 data, end, error 이벤트를 사용한다. 
    data.push(chunk);
    console.log('data :', chunk, chunk.length); // 파일 읽기가 시작되면 data이벤트 발생. 16B씩 읽도록 설정 했으므로 16B보다 크다면 여러 번 발생 할 수 있다.
});

readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString()); // 파일을 다 읽으면 end 이벤트 발생
});

readStream.on('error', (err) => {
    console.log('error :', err); // 파일을 읽는 도중에 에러가 발생하면 error 이벤트 발생
});