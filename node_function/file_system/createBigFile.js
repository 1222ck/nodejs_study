// 1GB 용량의 텍스트 파일을 만드는 코드
const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for(let i = 0; i <= 10000000; i++) {
    file.write('안녕하세요. 엄청나게 큰 파일을 만들어 볼 것입니다. 각오 단단히 하세요@\n');
}
file.end;