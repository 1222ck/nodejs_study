const fs = require('fs');
// fs 모듈을 불러온 뒤 읽을 파일의 경로를 지정한다. 파일의 경로가 현재 파일 기준이 아니라 node 명령어를 실행하는 콘솔 기준인 점 유의! <- 폴더 내부에 들어 있는 파일을 실행할 때 경로 문제가 발생할 수 있다


fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data); // Buffer가 출력되는데 이는 readfile의 결과물이 출력되는 형식이다 toString을 사용해 문자열로 변환
    console.log(data.toString());
});

// fs는 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기가 불편함.