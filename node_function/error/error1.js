setInterval(() => { // setInterval을 사용한 것은 프로세스가 멈추는지 여부를 체크하기 위함이다. 프로세스가 에러로 멈추면 setInterval도 멈추기 때문
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마!'); // 에러 강제로 발생
    } catch (err) {
        console.error(err);
    }
}, 1000);

// 에러는 발생하지만 try/catch로 잡을 수 있고 setInterval도 직접 멈추기 전(컨트롤 + c)까지 계속 실행된다. 이렇게 에러가 발생할 것 같은 부분을 미리 try/catch로 감싸면 된다.