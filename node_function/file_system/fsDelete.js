const fs = require('fs').promises;

fs.readdir('./folder') // fs.readdir(경로, 콜백): 폴더 안의 내용물을 확인할 수 있다. 배열 안에 내부 파일과 폴더명이 나온다
    .then((dir) => {
        console.log('폴더 내용 확인', dir);
        return fs.unlink('./folder/newfile.js'); // fs.unlink(경로, 콜백): 파일을 지울 수 있다. 파일이 없다면 에러가 발생하므로 먼저 파일이 있는지를 꼭 확인하여야 한다.
    })
    .then(() => {
        console.log('파일 삭제 성공');
        return fs.rmdir('./folder'); // fs.rmdir(경로, 콜백): 폴더를 지울 수 있다. 폴더 안에 파일들이 있다면 에러가 발생하므로 먼저 내부 파일을 모두 지우고 호출해야한다.
    })
    .then(() => {
        console.log('폴더 삭제 성공');
    })
    .catch((err) => {
        console.error(err);
    }); 
// node fsDelete.js를 한번 더 실행하면 ENOENT 에러가 발생한다. 존재하지 않는 파일을 지웠다는 에러이다.