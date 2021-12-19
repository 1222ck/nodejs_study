// buffer 객체는 여러 가지 메서드를 제공한다. 
const buffer = Buffer.from('저를 버퍼로 바꿔보세요'); // from(문자열): 문자열을 버퍼로 바꿀 수 있다. length 속성은 버퍼의 크리를 알린다. 바이트 단위이다
console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString()); // toString(버퍼): 버퍼를 다시 문자열로 바꿀 수 있다. base64나 hex를 인수로 넣으면 해당 인코딩으로도 변환이 가능하다

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array); // concat(배열): 배열 안에 든 버퍼들을 하나로 합친다.
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5); // alloc(바이트): 빈 버퍼를 생성한다. 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성된다.
console.log('alloc():', buffer3);

// readFile 방식의 버퍼가 편리하지만 문제점이 있다. 용량이 100MB인 파일이 있으면 읽을 때 메모리에 100MB의 버퍼를 만들어야 한다. 서버처럼 몇명이 이용할지 모르는 환경에서 동시에 작업을 진행하기 때문에 메모리 문제가 발생할 수 있다.
// 모든 내용을 버퍼에 다 쓴 후에야 다음 동작으로 넘어가므로 파일 읽기, 압축, 파일 쓰기 등의 조작을 연달아 할 때 매번 전체 용량을 버퍼로 처리해야 다음 단계로 넘어갈 수 있다. 