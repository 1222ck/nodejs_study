// 노드 8.5버전 이후에는 createReadStream과 createWriteStream을 pipe하지 않아도 파일을 복사 할 수 있다. 
const fs = require('fs').promises;

fs.copyFile('readme4.txt', 'writeme4.txt') // 첫 번째 인수로 복사할 파일, 두 번째 인수로 복사된 경로를, 세 번째 인수로 복사 후 실행될 콜백 함수를 넣는다. 
    .then(() => {
        console.log('복사 완료');
    })
    .catch((error) => {
        console.error(error);
    });