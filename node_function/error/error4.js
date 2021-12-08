process.on('uncaughtException', (err) => { // process 객체에 uncaughtException 이벤트 리스너를 달았다. 처리하지 못한 에러가 발생 했을 때 이벤트 리스너가 실행되고 프로세스가 유지된다. 
    console.error('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);
// uncaughtExceoption은 단순히 에러 내용을 기록하는 정도로 사용하고, 에러를 기록한 후 process.exit()으로 프로세스를 종료하는 것이 좋다. 에러가 발생하는 코드를 수정하지 않는 이상, 프로세스가 실행되는 동안 에러는 계속 발생할 것이다.