// 여러 개의 워커스레드에 데이터 넘기기. postMessage로 데이터를 보내는 방법과는 다른 방법

const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) { // 부모일 때
    const threads = new Set();
    threads.add(new Worker(__filename, { // new Worker를 호출할 때 두번째 인수인 workerData 속성으로 원하는 데이터를 보낼 수 있다. 워커에서는 workerData로 부모로부터 데이터를 받는다.
        workerData: { start: 1 },
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2 },
    }));
    for (let worker of threads) {
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) { //워커 두개가 모두 종료되면
                console.log('job done'); // job done이 로깅된다
            }
        });
    }
} else { // 워커일 때
    const data = workerData;
    parentPort.postMessage(data.start + 100); // 두개의 워커가 돌아가고 있으며, 각각 부모로부터 숫자를 받아서 100을 더해 돌려준다.
}