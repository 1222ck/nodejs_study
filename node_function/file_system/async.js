// 노드는 대부분의 메서드를 비동기 방식으로 처리함. 하지만 몇몇 메서드는 동기 방식인데, fs 모듈에 많다.
// 반복 실행할 때마다 결과가 달라짐

const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => { // 비동기 메서드들은 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어감
    if (err) {
        throw err;
    }
    console.log('1번', data.toString()); 
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝'); // 앞의 비동기 메서드들을 요청만 보내고 바로 '끝'을 찍는다. 나중에 읽기가 완료되면 백그라운드가 다시 메인 스레드에 열린다. 메인 스레드는 그제서야 등록된 콜백 함수를 실행한다

// 비동기 방식의 장점은 수백 개의 I/O 요청이 들어와도 메인 스레드는 백그라운드에 요청 처리를 위임한다. 그 후로도 얼마든지 요청을 더 받을 수 있다. 백그라운드는 거의 동시에 모든 요청을 처리하고, 백그라운드에서 요청 처리가 완료되었다고 알리면 그 때 콜백 함수를 처리한다. 