const v1 = /^(?:[jJ]ava(?:[sS]cript)?|[Cc](?:\+{2}|#)?)$/gm;

// const v2 = new RegExp('^(?:[jJ]ava(?:[sS]cript)?|[Cc](?:+{2}|#)?)$', 'gm');

const res1 = v1.exec('Javascript');
console.log(res1);
const res2 = v1.test('Javascript');
console.log(res2);

const test = 'Javascript';

const res3 = test.match(v1);
console.log(res3)
const res4 = test.search(v1);
console.log(res4)
