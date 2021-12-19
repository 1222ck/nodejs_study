// 노드에서 멀티 스레드 방식으로 작업하는 방법

const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

// isMainThread를 통해 현재 코드가 메인 스레드에서 실행되는지, 우리가 생성한 워커 스레드에서 실행되는지 구분된다.
if(isMainThread) { // 부모일 때, 기존에 동작하던 싱글 스레드를 메인 스레드 또는 부모 스레드라고 부른다.
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
} else { // 워커일 때
    parentPort.on('message', (value) => { // 워커에서 on 메서드를 사용할 때는 직접 워커를 종료해야함 
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close(); // 부모와의 연결이 종료됨. 종료될 때는 worker.on('exit')이 실행됨
    });
}