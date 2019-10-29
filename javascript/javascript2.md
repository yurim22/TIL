&#9997; Javascript 입문 제 2강
======================

## 변수와 상수

#### CodeSandBox에서 진행하는 것이 좋습니다. index.js에 있는 내용을 모두 지우고 코드를 작성하고, 오른쪽 Console에서 결과값을 확인하시면 됩니다.
-------------------------------

변수와 상수는 특정 이름에 특정 값을 담을 때 사용합니다. 

* 예를 들어서 lion이라는 변수에 1이라는 값을 넣는다고 가정해봅시다. 그러면 코드를 이렇게 입력하면 됩니다.
```javascript
let lion = 1;
console.log(lion);
```
결과창에 1이라는 값이 나오면 성공!

#### 특정 이름에 특정 값을 선언하는 것, 우리는 이를 선언이라고 합니다. 쉽게 설명하자면 lion이라는 값을 이제부터 1이라고 정해주는 것입니다.

값을 선언 할 때에는 두 가지 종류가 있는데, 하나는 변수, 다른 하나는 상수입니다.

---------------------------

### 변수
변수는 바뀔 수 있는 값으로, 한번 값으로 선언하고서 다른 값으로 바꿀 수 있습니다.
```javascript
let lion = 1;
console.log(lion);      //1
lion = 'likelion';     
console.log(lion);      //likelion
```

변수를 선언 할 때는 이렇게 **let**이라는 키워드를 사용합니다. 사용 하실 때 주의 할 점은 같은 블록 범위 내에서 한번 선언했으면 똑같은 이름으로 선언하지 못합니다.

* 이런 코드는 오류가 발생합니다 ('let'으로 같은 이름의 변수를 선언 한 경우 )
```javascript
let lion = 1;
let lion = 'likelion';
```
-------------------------

### 상수
상수는, 한번 선언하고 값이 바뀌지 않아 값이 고정적입니다. 상수를 선언 할 때에는 다음과 같이 선언합니다.
```javascript
const lion = 1;
```
상수를 선언 할 때에는 이렇게 **const** 이라는 키워드를 사용합니다. 상수를 선언하고 나면, 값을 바꿀 수 없습니다.

* 이런 코드는 오류가 발생합니다. ('const'로 상수를 선언하고 그 값을 바꾸려고 하는 경우)
```javascript
const lion = 1;
lion = 'likelion';
```
"Attempted to assign to readonly property." 라는 오류가 발생했습니다. 이는 한번 상수로 선언했으면 값을 바꿀 수 없음을 의미합니다.

상수를 선언할 때에도 마찬가지로 한번 선언했으면 같은 이름으로 선언 할 수 없습니다.

```javascript
const lion = 1;
const lion = 'likelion';
```
---------------------------

### var
예전에 JavaScript를 공부했던 분이시라면 **var**을 알고 계실 것입니다.

모던 JavaScript에서는 더 이상 사용되지 않습니다.

---------------------

### 데이터타입 (DataType)
JavaScript에서 데이터 타입은 아래와 같이 네 종류로 이루어져 있습니다.

* *숫자(Number)*
* *문자열(String)*
* *참/거짓(Boolean)*
* *null & undefined*

**숫자**는 위에서 작성해보았듯이 바로 값을 대입해 주면 됩니다.
```javascript
let lion = 1;
```

**문자열**은 작은따옴표('') 또는 큰따옴표("")로 감싸서 선언합니다.
```javascript
let myongji = '띵지';
```

**Boolean**은 Python에서 다루었듯이 참 혹은 거짓 두가지 종류의 값만을 나타낼 수 있습니다.
```javascript
let coding = true;
let sleep = false;
```

**null**과 **undefined**는 JavaScript에서 '없음'을 나타냅니다.

둘의 용도는 살짝 다른데, null은 '값이 없음'을 나타내고.
```javascript
cosnt friend = null;
```

undefined는 '아직 값이 설정되지 않음'을 뜻합니다.
```javascript
let lion;
console.log(lion);           //undefined
```
null과 undefined 는 둘 다 값이 없음을 의미하는건 맞는데, null은 우리가 없다고, 고의적으로 설정하는 값을 의미하고, undefined는 우리가 설정을 하지 않았기 때문에 없는 값을 의미합니다.