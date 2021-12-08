// 파일/폴더의 변경 사항을 감시할 수 있는 watch 메서드이다. 
const fs = require('fs');

fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType, filename);
});
// target.txt 파일의 내용물을 수정하면 change 이벤트가 발생하고, 파일명을 변경하거나 파일을 삭제하면 rename 이벤트가 발생한다. 
// rename 이벤트가 발생한 후에는 더 이상 watch가 수행되지 않는다. 