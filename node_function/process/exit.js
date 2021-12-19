// setInterval로 반복되고 있는 코드를 process.exit()으로 멈추게 함
let i = 1;
setInterval(() => {
    if(i === 5) {
        console.log("종료!");
        process.exit();
    }
    console.log(i);
    i += 1;
}, 1000); // 1부터 4까지 표시한 뒤, i가 5가 되었을 때 종료하도록 함