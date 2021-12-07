const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력됩니다') // writeFile 메서드에 생성될 파일의 경로와 내용을 입력한다.
    .then(() => {
        return fs.readFile('./writeme.txt'); // 도중에 에러가 발생하지 않는다면 writeFile.txt 파일이 생성될 것
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });