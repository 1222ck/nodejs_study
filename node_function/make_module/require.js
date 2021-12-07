console.log('require가 가장 위에 오지 않아도 됩니다. ');

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache 입니다.');
console.log(require.cache);
console.log('require.main 입니다.');
console.log(require.main === module);
console.log(require.main.filename);