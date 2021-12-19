const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt'); // 첫 번째 인수로는 출력 파일명을 입력한다. 두번째는 옵션
writeStream.on('finish', () => { // finish 이벤트 리스너도 붙였다. 파일 쓰기가 종료되면 콜백 함수가 호출된다.
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다. \n'); // write 메서드로 넣을 데이터를 쓴다.
writeStream.write('한 번 더 씁니다.');
writeStream.end(); // 데이터를 다 썼다면 end 메서드로 종료를 알린다. 

// createReadStream으로 파일을 읽고 그 스트림을 전달받아 createWriteStream 으로 파일을 쓸 수도 있다. 
// 스트림끼리 연결하는 것을 '파이핑한다' 라고 한다