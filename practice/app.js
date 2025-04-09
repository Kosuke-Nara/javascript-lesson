console.log('Hello World!');

let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let age = 23;
console.log(age);

let single = '文字列型です';
console.log(single);

let double = "英語だとstriingsといいます";
console.log(double);

console.log('elephant'); 

let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);

let template = 'テンプレートリテラル';
let templateText = `これが${template}です。
${template}は改行もできます。`;
console.log(templateText);

let num = 10;
console.log(num);

let numTen = 10;
let strTen = '10';
console.log(numTen, strTen);

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

let num1 = 25;
let num2 = 2;
console.log(num1 + num2);

let num3 = 25;
let num4 = 2;
console.log(num3 - num4);

let num5 = 25;
let num6 = 2;
console.log(num5 * num6);

let num7 = 25;
let num8 = 2;
console.log(num7 / num8);

let names = ['John', 'Bob', 'Michal', 'Emma'];
console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let John = {
  name: 'John',
  age: 26,
  bloodtype: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♩');
  }
};

John.sing();

console.log(John.bloodtype);

let Andy = {};
Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodtype = 'B';
Andy.favorite = 'sweets';

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');

getArea(5);　//　関数を呼び出し5を渡す
// するとradiusuに5が代入にされて、5 * 5* 3.14になる

if (true) {
  console.log('trueです！');
}
console.log('処理が終わりました！');

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました！');

let tall = 185;
if (tall>= 180) {
  console.log('高身長です！');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
}else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
}else if (signal === 'yellow'){
  console.log('黄色信号です。空気を読みましょう');
}

let myAge = 12;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
}else if (myAge >= 20) {
  console.log('お酒が飲めます');
}else if (myAge >= 18) {
  console.log('選挙権があります');
}else {
  console.log('子供です');
}

let loto = 8;

if (loto === 7 || loto === 8) {
  console.log('当たり');
}else {
  console.log('ハズレ');
}

let numVal = 8;
let strVal = 'text'
console.log(numVal === 7 || strVal === 'text');

let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
}else {
  console.log('揃っていないため、出発できません');
}

// if文の使った書き方
let errMsg = '';
if (errMsg === '') {
  console.log('ない！');
}else {
  console.log('ある！');
}

// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');

if (1) {
  console.log('hoge');
}

if (0) {
  console.log('piyo');
}

for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}