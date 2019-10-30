&#9997; Javascript 입문 제 3강
======================

## 연산자
**연산자**는 프로그래밍 언어에서 특정 연산을 하도록 하는 문자입니다.

예를들어,
```javascript
let lion = 1;  //변수의 선언
lion = 2; //대입 연산자
```
여기서 두 번째로 사용된 '=' 문자도 연산자의 한 종류 입니다.

아래에서는 연산자의 종류에 대해 자세히 알아보도록 하겠습니다.

-----------------------------------
연산자의 종류는 아래와 같습니다.

* *산술 연산자*
* *대입 연산자*
* *논리 연산자*
* *비교 연산자*

### 산술연산자
산술 연산자는 사칙연산과 같은 작업을 하는 연산자이다.

* `+` : 덧셈
* `-` : 뺄셈
* `*` : 곱셈
* `/` : 나눗셈

위 네 연산자가 가장 기본적인 산술 연산자입니다.

또한, 다른 프로그래밍 언어에서도 살펴 보았듯이 `++` 같은 연산자도 산술 연산자에 포함됩니다.

```javascript
let sum = 1;
console.log(sum++); //1
console.log(++sum); // 2
```

`++`은 변수 이름 앞에 오면 1을 더한 다음의 값을 보여주고, 변수 이름 뒤에 오면 1을 더하기 직전의 값을 보여준다는 점에서 차이가 있습니다. (더하기 직전의 값을 보여주고 더하기 연산을 실행함)

덧셈 외에도 뺄셈도 똑같이 할 수 있습니다.

-------------------------
### 대입 연산자
대입 연산자는 변수에 연산한 값을 바로 할당할 때 사용되는 연산자입니다.

예를들어

```javascript
let a = 1;
a = a + 3;
```
위와 같은 코드는 다음과 같이 작성할 수 있습니다.
```javascript
let a = 1;
a += 3;
```
덧셈 이외의 다른 연산자에서도 동일하게 적용 가능합니다.
```javascript
let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a);   // 1
```
------------------------
### 논리 연산자
논리 연산자는 Boolean Type을 위한 연산자 입니다.

논리 연산자로는 세 가지가 있습니다.

* `!` : NOT
* `&&` : AND
* `||` : OR

논리 연산자는 NOT, AND, OR 연산자 순으로 계산합니다.

NOT연산자는 값이 true면 false로, false면 true를 반환합니다.
```javascript
let notT = !false; // true
let notF = !true;  //false
```

AND 연산자는 양쪽의 값이 둘 다 true일때만 true입니다.
```javascript
let andT = true && true; // true
let andF = true && false; // false
```

OR 연산자는 양쪽의 값 중 하나라도 true이면 true입니다.
```javascript
let orT = true || false; // true
let orF = false || false; // false
```
----------------------------
### 비교 연산자
비교 연산자는 두 값을 비교할 때 사용합니다. 값이 같으면 true, 아니면 false를 반환합니다.

* `===`는 두 값이 일치하고, 타입도 같은지 검사합니다. 
* `==`는 두 값이 같은지 비교하지만 타입 검사는 하지 않습니다.

=> 앞으로 두 값이 일치하는지 비교 할 때에는 `==` 대신 `===`를 사용 할 것을 권장드립니다. `==`를 사용하다보면 실수를 할 확률이 높아집니다.

마찬가지로, 
* `!=`를 사용하면 타입 검사를 하지 않습니다.
```javascript
const a = 1;
const b = '1';
const c = '2';
console.log(a != b); //false
console.log(b != c); //true
```
=> 여러분이 두 값이 일치하지 않는지 비교 할 때에는 `!=` 대신 `!==`를 사용 할 것을 권장드립니다.

두 값 중에서 무엇이 더 크고 작은지 비교하기 위해서는 `부등호 및 등호`를 사용합니다

--------------------------
### 주석
코드에 메모를 달고 싶을 때에는 아래와 같이 작성할 수 있습니다.

```javascript
// 이것은 주석이랑께
```

```javascript
/*
    여러줄로 작성하고 싶을 때는 이렇게 해!
*/
```

----------------------
### 문자열 붙이기
단순히 두 문자열을 붙일 때에는 `+`을 사용합니다.
```javascript
const like = '멋쟁이';
const lion = '사자처럼';
console.log(like + lion);   // 멋쟁이 사자처럼
```