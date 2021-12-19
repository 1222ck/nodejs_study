const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test'}); // Set-Cookie는 브라우저한테 다음의 값(mycookie=test)의 쿠키를 저장하라는 의미이다
    res.end('Hello Cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다.');
    });