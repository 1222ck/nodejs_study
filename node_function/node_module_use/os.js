// 웹 브라우저에 사용되는 자바스크립트는 운영체제의 정보를 가져올 수 없지만, 노드는 os 모듈에 정보가 담겨 있어 정보를 가져올 수 있습니다.

const os = require('os');

console.log('운영체제 정보--------------------------');
console.log('os.arch():', os.arch()); // process.arch와 동일
console.log('os.platform():', os.platform()); // process.platform과 동일
console.log('os.type():', os.type()); // 운영체제의 종류를 보여줌
console.log('os.uptime():', os.uptime()); // 운영체제 부팅 이후 흐른 시간(초)를 보여줌 process.uptime()은 노드의 실행시간.
console.log('os.hostname():', os.hostname()); // 컴퓨터의 이름
console.log('os.release():', os.release()); // 운영체제의 버전

console.log('경로----------------------------------');
console.log('os.homedir():', os.homedir()); // 홈 디렉터리 경로
console.log('os.tmpdir():', os.tmpdir()); // 임시 파일 저장 경로

console.log('cpu정보-------------------------------');
console.log('os.cpus():', os.cpus()); // 컴퓨터의 코어 정보
console.log('os.cpus().length:', os.cpus().length); // 코어의 개수

console.log('메모리 정보---------------------------');
console.log('os.freemem():', os.freemem()); // 사용 가능한 메모리(RAM)를 보여줌
console.log('os.totalmem():', os.totalmem()); // 전체 메모리 용량