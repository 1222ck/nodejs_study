const crypto = require('crypto');

const algorithm = 'aes-256-cbc'; // aes-256-cbc 알고리즘은 키는 32바이트여야 하고, iv는 16바이트여야 한다.
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456' // iv는 암호화할 때 사용하는 초기화 벡터를 의미한다.

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64'); // cipher.update(문자열, 인코딩, 출력 인코딩): 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣는다. 보통 문자열은 utf8 인코딩을, 암호는 base64를 많이 사용한다.
result += cipher.final('base64'); // cipher.final(출력 인코딩): 출력 결과물의 인코딩을 넣으면 암호화가 완료된다
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화할 때 사용하는 함수. 암호화할 때 사용했던 알고리즘과 키, iv를 그대로 넣어야 한다.
let result2 = decipher.update(result, 'base64', 'utf8'); // decipher.update(문자열, 인코딩, 출력 인코딩): 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣는다. createCipher의 update()에서 utf8, base64순으로 넣었다면 createDecipheriv()의 update()에서는 base64, utf8 순으로 넣으면 된다.
result2 += decipher.final('utf8'); // decipher.final(출력 인코딩): 복호화 결과물의 인코딩을 넣는다.
console.log('복호화:', result2);