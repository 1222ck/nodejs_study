// const http = require('http');
// const fs = require('fs').promises;

// const users = {}; // 데이터베이스 대용으로 사용자 정보를 저장하는 객체 

// http.createServer(async (req, res) => {
//     try {
//         console.log(req.method, req.url);
//         if(req.method === 'GET') { // http 요청 메서드 구분. 메서드가 GET이면 req.url로 요청 주소를 구분한다.
//             if(req.url === '/') { // 주소가 /일 때는 restFront.html 을 제공
//                 const data = await fs.readFile('./restFront.html');
//                 res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//                 return res.end(data); // res.end를 호출한다고 해서 함수가 종료되는 것이 아니다. js 문법상 return을 붙여야 종료된다. return을 붙이지 않아 res.end같은 메서드가 여러 번 실행 되면 Error발생
//             } else if (req.url === '/about') { // 주소가 /about 일때는 about.html 파일 제공
//                 const data = await fs.readFile('./about.html');
//                 res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
//                 return res.end(data);
//             } else if (req.url === '/users') {
//                 res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
//                 return res.end(JSON.stringify(users));
//             }
//             // 주소가 /도 /about 도 아니면
//             try {
//                 const data = await fs.readFile(`.${req.url}`);
//                 return res.end(data);
//             } catch(err) {
//                 // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
//             }
//         } else if (req.method === 'POST') {
//             if(req.url === '/users') {
//                 let body ='';
//                 // 요청의 body를 stream 형식으로 받음 req와 res도 내부적으로는 스트림(readStream, writeStream)으로 되어 있으므로 요청/응답의 데이터가 스트림 형식으로 전달된다. 
//                 req.on('data', (data) => { // req.on('data') : 요청의 본문에 들어 있는 데이터를 꺼내기 위한 작업
//                     body += data;
//                 });
//                 // 요청의 body를 다 받은 후 실행됨
//                 return req.on('end', () => {
//                     console.log('POST 본문(body):', body);
//                     const {name} = JSON.parse(body); // 받은 데이터는 문자열이므로 JSON으로 만드는 JSON.parse 과정이 필요하다
//                     const id = Date.now();
//                     users[id] = name;
//                     res.writeHead(201);
//                     res.end('등록 성공');
//                 });
//             }
//         } else if(req.method === 'PUT') {
//             if(req.url.startsWith('/user/')) {
//                 const key = req.url.split('/')[2];
//                 let body = '';
//                 req.on('data', (data) => {
//                     body += data;
//                 });
//                 return req.on('end', () => {
//                     console.log('PUT 본문(body):', body);
//                     users[key] = JSON.parse(body).name;
//                     return res.end(JSON.stringify(users));
//                 });
//             }
//         } else if(req.method === 'DELETE') {
//             if(req.url.startsWith('/user/')) {
//                 const key = req.url.split('/')[2];
//                 delete users[key];
//                 return res.end(JSON.stringify(users));
//             }
//         }
//         res.writeHead(404);
//         return res.end('NOT FOUND');
//     } catch(err) {
//         console.error(err);
//         res.writeHead(500, { 'Content-type': 'text/plain; charset=utf-8' });
//         res.end(err.message);
//     }
// })
//     .listen(8082, () => {
//         console.log('8082번 포트에서 서버 대기 중입니다.');
//     });

const http = require('http');
const fs = require('fs').promises;

const users = {}; // 데이터 저장용

http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      if (req.url === '/') {
        const data = await fs.readFile('./restFront.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/about') {
        const data = await fs.readFile('./about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(users));
      }
      // /도 /about도 /users도 아니면
      try {
        const data = await fs.readFile(`.${req.url}`);
        return res.end(data);
      } catch (err) {
        // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
      }
    } else if (req.method === 'POST') {
      if (req.url === '/user') {
        let body = '';
        // 요청의 body를 stream 형식으로 받음
        req.on('data', (data) => {
          body += data;
        });
        // 요청의 body를 다 받은 후 실행됨
        return req.on('end', () => {
          console.log('POST 본문(Body):', body);
          const { name } = JSON.parse(body);
          const id = Date.now();
          users[id] = name;
          res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('ok');
        });
      }
    } else if (req.method === 'PUT') {
      if (req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        return req.on('end', () => {
          console.log('PUT 본문(Body):', body);
          users[key] = JSON.parse(body).name;
          res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end('ok');
        });
      }
    } else if (req.method === 'DELETE') {
      if (req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        delete users[key];
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('ok');
      }
    }
    res.writeHead(404);
    return res.end('NOT FOUND');
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})
  .listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다');
  });