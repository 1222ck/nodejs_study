// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const qs = require('querystring');
// const { listen } = require('express/lib/application');
// const e = require('express');

// const parseCookies = (cookie = '') => // parseCookie : 쿠키는 mycookie=test와 같은 문자열의 형태인데, 이를 쉽게 사용하기 위해 js 객체 형태로 바꾸는 함수
//     cookie
//         .split(';')
//         .map(v => v.split('='))
//         .reduce((acc, [k, v]) => {
//             acc[k.trim()] = decodeURIComponent(v);
//             return acc;
//         }, {}); // 이 함수를 거치면 { mycookie: 'test' }의 형태가 된다

// http.createServer(async (req, res) => {
//     const cookies = parseCookies(req.headers.cookie);
//     // 주소가 /login으로 시작하는 경우
//     if(req.url.startsWith('/login')) { // 주소가 /login 으로 시작할 경우에는 url과 querystring 모듈로 각각 주소와 주소에 딸려오는 query를 분석한다.  
//         const { query } = url.parse(req.url);
//         const { name } = qs.parse(query);
//         const expires = new Date();
//         expires.setMinutes(expires.getMinutes() + 5); // 쿠키 유효 시간을 현재 시간 + 5분으로 설정 
//         res.writeHead(302, { // 302 응답 코드, 리다이렉트 주소와 함께 쿠키를 헤더에 넣음. 브라우저는 이 응답 코드를 보고 페이지를 해당 주소로 리다이렉트 한다.
//             Location: '/',
//             'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`, // 헤더에는 한글을 설정할 수 없으므로 name 변수를 encodeURIComponent 메서드로 인코딩 한다. 
//         });
//         res.end();

//         // name이라는 쿠키가 있는 경우
//     } else if (cookies.name) { // 그 외의 경우 (/로 접속했을 때 등), 먼저 쿠키가 있는지 없는지 확인하고 쿠키가 없다면 로그인 할 수 있는 페이지를 보낸다. 
//         res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
//         res.end(`${cookies.name}님 안녕하세요`);
//     } else {
//         try {
//             const data = await fs.readFile('./cookie2.html');
//             res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//             res.end(data);
//         } catch (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
//             res.end(err.message);
//         }
//     }

// })
//     .listen(8084, () => {
//         console.log('8084번 포트에서 서버 대기 중입니다!')
//     });

const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  // name이라는 쿠키가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile('./cookie2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });