const path = require('path');

const string = __filename;

console.log('path.sep():', path.sep); // 경로의 구분자. 윈도는 / 
console.log('path.delimiter():', path.delimiter); //환경 변수의 구분자. process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있다. 윈도는 세미콜론(;)
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string)); // 파일이 위치한 폴더 경로를 보여줌
console.log('path.extname():', path.extname(string)); // 파일의 확장자를 보여줌
console.log('path.basename():', path.basename(string)); // 파일의 이름(확장자 포함)을 표시함. 
console.log('path.basename extname:', path.basename(string, path.extname(string))); // 파일의 이름만 표시하고 싶다면 basename의 두 번째 인수로 파일의 확장자를 넣으면 된다.
console.log('------------------------------');
console.log('path.parse()', path.parse(string)); // 파일 경로를 root, dir, base, ext, name 으로 분리한다
console.log('path.format():', path.format({ // path.parse()한 객체를 파일 경로로 합친다
    dir: '/mnt/c/Users/Choi Kwon/Desktop/kwon/nodejs_textbook/node_function/node_module_use/path.js',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('/mnt/c\\\\\\Users/Choi Kwon/Desktop/kwon/nodejs_textbook/node_function//////node_module_use//////path.js')); // /를 여러번 사용했거나 혼용하였을때 정상적인 경로로 변환함
console.log('------------------------------');
console.log('path.isAbsolute(C://):', path.isAbsolute('C://')); // 파일의 경로가 절대경로인지 상대경로인지를 true나 false로 알린다.
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('/mnt/c/Users/Choi Kwon/Desktop/kwon/nodejs_textbook/node_function/node_module_use/path.js', '/mnt/c/Users/Choi Kwon/Desktop/kwon/nodejs_textbook/node_function/Embedded_obj/console.js')); // 경로를 두개 넣으면 첫번째 경로에서 두번째 경로로 가는 방법을 알려준다
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/node_module_use')); // 여러 인수를 넣으면 하나의 경로로 합친다. 상대경로인 ..(부모 디렉터리)과 .(현 위치)도 알아서 처리한다.
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/node_module_use'))

// join과 resolve의 차이
console.log('------------------------------');
console.log('path.join과 path.resolve 메서드는 비슷해 보이지만 동작 방식이 다르다. /를 만나면 path.resolve는 절대 경로로 인식해서 앞의 경로를 무시하고, path.join은 상대경로로 처리한다.');
console.log(`path.join('/a', '/b', 'c'):`, path.join('/a', '/b', 'c'));
console.log(`path.resolve('/a', '/b', 'c'):`, path.resolve('/a', '/b', 'c'));