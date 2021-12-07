// 노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용하는 모듈. 이 모듈을 통해 다른 언어의 코드(python 등)를 실행하고 결과값을 받을 수 있다. 이름이 child_process인 이유는 현재 노드 프로레스 외에 새로운 프로세스를 띄워서 명령을 수행하고, 노드 프로세스에 결과를 알려주기 때문

const exec = require('child_process').exec;

// 명령 프롬프트 명령어인 dir을 노드를 통해 실행
const process = exec('dir'); // exec의 첫번째 인수로 명령어를 넣는다(리눅스나 맥이라면 'ls') 실행하면 현재 폴더의 파일 목록들이 표시 됨

// 결과는 stdout(표준출력)과 stderr(표준에러)에 붙여둔 data 이벤트 리스너에 버퍼 형태로 전달된다.
process.stdout.on('data', function(data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러