// fs는 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기가 불편하다. 따라서 fs 모듈을 프로미스 형식으로 바꿔주는 방법을 사용한다.
// fs 모듈에서 promise 속성을 불러오면 프로미스 기반의 fs 모듈을 사용할 수 있게 된다.
const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    })