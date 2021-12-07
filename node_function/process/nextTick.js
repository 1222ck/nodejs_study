// process.nextTick(콜백)
// 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리하도록 만든다.
setImmediate(() => {
    console.log('immediate');
});
process.nextTick(() => { // setImmediate나 setTimeout보다 먼저 실행된다
    console.log('nextTick'); 
});
setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise')); 
// resolve된 Promise도 nextTick처럼 다른 콜백들 보다 우선시되기 때문에 코드 맨 밑에 Promise를 넣었다.
// 그래서 process.nextTick과 Promise를 마이크로태스크라고 따로 구분지어 부른다.