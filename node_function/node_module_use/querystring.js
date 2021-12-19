// WHATWG방식의 url 대신 기존 노드의 url을 사용할 때, search 부분을 사용하기 쉽게 객체로 만드는 모듈

const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://www.gilbut.co.kr/?page=3&limt=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query); // querystring.parse(쿼리): url의 query 부분을 자바스크립트 객체로 분해한다
console.log('querystring.stringfy():', querystring.stringify(query)); // querystring.stringfy(객체): 분해된 query 객체를 문자열로 다시 조립한다

// 간단하게 객체로 분해되고 문자열로 조립되므로 편리하다