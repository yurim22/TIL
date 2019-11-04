&#9997; Javascript 입문 제 6강
======================
# 객체
-----------------------
객체는 변수나 상수를 사용할 때에 하나의 이름에 대해 여러 종류의 값을 넣을 수 있게 해줍니다.

```javascript
const yurim ={
    name: '서유림',
    age: 23,
    grade: '3rd'
};

console.log(yurim.name);  //서유림
console.log(yurim.age);   // 23
console.log(yurim.grade); // 3rd
```
객체를 선언 할 때에는 이렇게 `{ }` 문자 안에 원하는 값들을 넣어주면 됩니다. 값을 집어 넣을 때에는 `키(Key)` : `값(Value)`의 형태로 넣으며, 키에 해당하는 부분은 공백이 없어야 합니다.

```javascript
const yurim2 = {
    'coding everyday': false
};
```
만약에 공백이 있어야 하는 상황이라면 이를 따옴표로 감싸서 문자열로 넣어주면 된다요
*************************

#### 함수에서 파라미터로 객체 받기
위에서 만든 객체를 함수의 파라미터로 받아와 봅시당

```javascript
const yurim = {
    name : '서유림',
    age : 23,
    likelion : 7
};

function hello(lion){
    const text = `안녕하세요, 저는 ${lion.name}(${lion.age}세)입니다. 멋사 ${lion.likelion}기 입니다.`
    console.log(text);
}

hello(yurim);

/*
    안녕하세요, 저는 서유림(23세)입니다. 멋사 7기 입니다.
*/
```

**************
#### 객체 비구조화 할당(객체 구조 분해)
위에서 본 함수에서 파라미터로 받아온 값을 조회할 때마다 `${lion.name}`와 같이 쓰고 있는데, 객체 *비구조화 할당*을 통해 아래와 같이 코드를 더욱 간결하게 작성할 수 있습니다.

```javascript
const yurim2 = {
    name : '서유림',
    age : 23,
    likelion : 7
};

function hello(lion){
    const {name, age, likelion } = lion;  //객체에서 값을 추출해 새로운 상수로 선언 
    const text = `안녕하세요, 저는 ${name}(${age}세)입니다. 멋사 ${likelion}기 입니다.`
    console.log(text); 
}

hello(yurim2)

```

파라미터 단계에서 객체 비구조화 할당을 하면 더욱 깔끔한 코드를 볼 수 있습니다.

```javascript
const yurim2 = {
    name : '서유림',
    age : 23,
    likelion : 7
};

function hello({name, age, likelion}){
    const text = `안녕하세요, 저는 ${name}(${age}세)입니다. 멋사 ${likelion}기 입니다.`
    console.log(text); 
}

hello(yurim2)

```
********************************
#### 객체 내부 함수
아래와 같이 *객체 내부에 함수를 넣을 수 있습니다.* 함수를 선언 할 때에는 이름이 없어도 됩니다. (주의 : 객체 안에 함수를 넣을 때, 화살표 함수로 선언한다면 제대로 작동하지 않습니다.)

```javascript
const yurim22 = {
    name : '서유림',
    sound : '리액트 마스터가 되자',
    say: function say() {
        console.log(this.sound);
    }
};

yurim22.say();       //리액트 마스터가 되자
```

함수가 객체안에 들어가게 되면, `this`는 자신이 속해있는 객체를 가르키게 됩니다.