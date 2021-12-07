const url = require('url'); // url모듈 안에 URL 생성자가 있다. 이 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리된다. 이 방식이 WHATWG의 url이다. WHATWG에만 있는 username, password, origin, searchParams 속성이 존재한다.

const { URL } = url;
const myURL = new URL('http://gilbut.co.kr/book/booklist.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('---------------------');
// 기존 노드 방식
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList/aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl); // 주소를 분해함. WHATWG 방식과 비교하면 username과 password 대신 auth 속성이 있고, searchParams 대신 query가 있다.
console.log('url.format():', url.format(parsedUrl)); // WHATWG방식 url과 기존 노드의 url을 모두 사용할 수 있다. 분해되었던 url 객체를 다시 원래 상태로 조립한다.