const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']); //파이썬 코드를 실행하는 명령어인 python test.py를 노드의 spawn을 통해 실행한다. spawn의 첫 번째 인수로 명령어를, 두 번째 인수로 옵션 배열을 넣으면 된다.

process.stdout.on('data', function(data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러

// 결과는 exec과 마찬가지로 stdout, stderr의 데이터로 나온다.
// exec와의 차이점은 exec는 셸을 실행해서 명령어를 수행하고, spawn은 새로운 프로세스를 띄우면서 프로세스를 실행한다. spawn에서도 세번째 인수로 { shell: true }를 제공하면 exec처럼 셸을 실행해서 명령어를 수행한다. 셸을 수행하는지 마는지에 따라 수행할 수 있는 명령어에 차이가 있다.