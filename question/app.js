// Q1 変数
let nickname = 'こうちゃん';
let age = 26;
let greet = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';
console.log(greet);


// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let template = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`
console.log(template);


//Q3 オブジェクト
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};
console.log(user.age);


//Q4 配列×オブジェクト
let playerList = [
    {
        name: 'John',
        age: 26,
        favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
        name: 'Bob',
        age: 33,
        favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
        name: 'Michael',
        age: 22,
        favorites: ['Football', 'Smash Bros.'],
    },
];
console.log(playerList[1].favorites[1]);


// Q5 四則演算
let totalAge = 0;
for (let i = 0; i < playerList.length; i++) {
    totalAge += playerList[i].age;
}
let averageAge = totalAge / playerList.length;
console.log(averageAge);


// Q6 関数
let sayHello = function () {
    console.log('Hello');
}
sayHello();

let sayWorld = function () {
    console.log('World');
}

sayWorld();


// Q7 メソッド
user.birthday = '2020-09-27';
console.log(user.birthday);

user.sayHello = function () {
    console.log('Hello！');
};
user.sayHello();

// Q8 引数
let calc = {
    add: function (x, y) {
        console.log(x + y);
    },
    subtract: function (x, y) {
        console.log(x - y);
    },
    multiply: function (x, y) {
        console.log(x * y);
    },
    divide: function (x, y) {
        console.log(x / y);
    }
}
calc.add(3, 4);
calc.subtract(20, 10);
calc.multiply(7, 7);
calc.divide(15, 3);


// Q9 返り値
function remainder(x, y) {
    return (x % y);
}
let x = 5;
let y = 3;
let result = remainder(5, 3);
console.log(x + 'を' + y + 'で割った余りは' + result + 'です。');


// Q10 スコープ
/*
xは関数fooのスコープ内で定義されているが、
console.log(x)は関数fooの外の指示なので関数foo内で定義されたxを参照できないことからエラーが発生した。
*/


// 応用編 Q1 標準組み込みオブジェクト
let random = Math.floor(Math.random() * 10);
console.log(random);


// 応用編 Q2 コールバック関数
setTimeout(function () {
    console.log('Hello World!');
}, 3000);


// 応用編 Q3 if
let num = 2;
if (num > 0) {
    console.log('num is greater than 0');
} else if (num < 0) {
    console.log('num is less than 0');
} else if (num = 0) {
    console.log('num is 0');
}

// 応用編 Q4 for
let numbers = [];
for (let i = 0; i <= 99; i++) {
    numbers.push(i);
}
console.log(numbers);

// 応用編 Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] !== 'number') {
        console.log('not number');
    } else if (mixed[i] % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}