// 프로미스의 에러는 catch 하지 않아도 알아서 처리된다.
// 프로미스의 에러를 알아서 처리하는 동작은 노드 버전이 올라감에 따라 바뀔 수 있다. 따라서 프로미스를 사용할 때는 항상 catch를 붙여주는 것을 권장한다.
const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./abcdefg.js')
}, 1000);