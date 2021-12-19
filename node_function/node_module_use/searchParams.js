const { URL } = require('url'); 

const myURL = new URL('https://www.gilbut.co.kr/?page=3&limt=10&category=nodejs&category=javascript'); // URL 생성자를 통해 myURL이라는 주소 객체를 만들었음. myURL안에는 searchParams 객체가 있다. search부분을 조작하는 다양한 메서드를 지원한다.

console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));// getALl(키): 키에 해당하는 값들을 가져옴. category 안에는 nodejs와 javascript라는 두가지 값이 들어 있음
console.log('searchParams.get():', myURL.searchParams.get('limt')); // get(키): 키에 해당하는 첫 번째 값만 가져옴.
console.log('searchParams.has():', myURL.searchParams.has('page')); // has(키): 해당 키가 있는지 없는지를 검사함

console.log('searchParams.keys():', myURL.searchParams.keys()); // keys(키): searchParams의 모든 키를 반복기(iterator)(ES2015문법) 객체로 가져온다.
console.log('searchParams.values():', myURL.searchParams.values()); // value(): searchPatams의 모든 값을 반복기 객체로 가져온다.

myURL.searchParams.append('filter', 'es3'); // append(키, 값): 해당 키를 추가한다. 같은 키의 값이 있다면 유지하고 하나 더 추가한다. 

myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter')); // set(키, 값): append와 비슷하지만, 같은 키의 값들을 모두 지우고 새로 추가한다.

myURL.searchParams.set('filter', 'es6'); // set(키, 값): append와 비슷하지만, 같은 키의 값들을 모두 지우고 새로 추가한다.
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter'); // delete(키): 해당 키를 제거한다.
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString()); // toString() 조작한 searchParams객체를 다시 문자열로 만든다. 이 문자열을 search에 대입하면 주소 객체에 반영된다.
myURL.search = myURL.searchParams.toString();

// query같은 문자열보다 searchParams가 유용한 이유는 query의 경우 querystring 모듈을 한 번 더 사용해야 하기 때문이다.