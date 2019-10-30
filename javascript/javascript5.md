&#9997; Javascript 입문 제 5강
======================

# 함수
---------------------
함수는 JavaScript 뿐 만 아니라 대부분의 프로그래밍 언어에서 핵심입니다. 함수는 학교 수학시간에 배웠던 것 처럼 y = f(x)의 형태라고 생각하시면 되요

예를 들어서 우리가 두 값의 합을 구하고 싶을 때 아래와 같은 코드를 작성합니다.

```javascript
const a = 1;
const b = 2;
const sum = a + b;
```

이러한 코드를 함수를 통해 만들어 보겠습니다.

```javascript
function add(a,b) {
    return a + b
}

const sum = add(1,2);
console.log(sum);
```
함수를 만들 때는 `function` 키워드를 사용하며, a,b와 같이 괄호 안에 함수에서 어떤 값을 받아올지 정해주는데 이것을 파라미터(매개변수)라고 합니다.

함수 내부에서 `return`키워드를 사용하여 함수의 결과물을 지정 할 수 있습니다.
return을 하게 되면, 함수가 끝나 return 아래의 코드는 호출되지 않습니다.
**********************

#### 템블릿 리터럴
우리는 console에서 문자열을 조합하기 위해서 아래와 같이 `+`문자를 사용했었다.

```javascript
function hello(name) {
    console.log('Hello, ' + name + '!');
}
hello('lion');
```
`+`문자를 사용해도 좋지만 es6에서 템플릿 리터럴 문법을 사용하여 더욱 간단하게 조합할 수 있게 되었습니다.

```javascript
function hello(name) {
    console.log(`Hello, ${name}!`);
}
hello('lion');
```
***********************

#### 화살표 함수
함수를 `function` 키워드 대신에 `=>` 문자를 사용해서도 만들 수 있습니다. 이를 '화살표 함수'라고 합니다.

```javascript
const add = (a, b) => {
    return a + b;
};
// 함수를 상수(const)로 선언하고 화살표(=>)를 통해 함수의 내용 설명
console.log(add(1, 2));
```

코드 블록 내부에서 바로 return을 하는 경우 아래와 같이 줄여서 쓸 수 있습니다.
```javascript
const add= (a, b) => a + b;
console.log(add(1,2));
```