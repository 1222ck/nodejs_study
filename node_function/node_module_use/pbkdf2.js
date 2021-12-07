// pbkdf2는 기존 문자열에 salt라고 불리는 문자열을 붙이 후 해시 알고리즘을 반복해서 적용하는 것

const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => { // randomBytes() 메서드로 64바이트 길이의 문자열을 만듬 이것이 salt가 된다. 
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => { // pbkdf2() 메서드에는 순서대로 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘을 인수로 넣는다 -> sha512로 변환된 결과값을 다시 sha512로 변환하는 과정을 10만번 수행함
        console.log('password:', key.toString('base64'));
    });
});                 

// randomBytes이므로 매번 실핼 할때마다 결과가 바뀐다. 따라서 salt를 잘 보관하고 있어야 비밀번호도 찾을 수 있다. 
// pbkdf2는 간단하지만 bcrypt나 scrypt보다 취약하다