&#9997; Javascript 입문 제 3강
======================

## 조건문
조건문을 사용하면 특정 조건이 만족됐을 때 코드를 실행할 수 있습니다.
조건문의 종류는 다음과 같다.

* if문
* switch/case문

************************
**if문**
if문은 괄호의 조건식이 만족하면 코드를 실행합니다.
```javascript
const lion = 7;
if(lion === 7) {
    console.log('멋쟁이 사자처럼 7기')
}
```
결과는 '멋쟁이 사자처럼 7기'가 Console에 출력됩니다.

만약 lion의 값이 7이 아닌 다른 값이면 결과가 어떻게 나올까?

```javascript
const lion = 6;
if(lion ===7) {
    console.log('멋쟁이 사자처럼 7기')
}
```
결과는 아무것도 출력되지 않는다

*if문의 기본구조*
```javascript
if(/*조건식*/){
    // true면 실행되는 코드
}
```

**if-else문**
만약 특정 조건이 만족할 때와 만족하지 않을 때에 서로 다른 코드를 실행해야 한다면 어떻게 해야 할까요? 바로 if-else문을 사용하면 됩니다.

```javascript
const lion = 6;
if(lion === 7){
    console.log('멋쟁이사자처럼 7기');
} else {
    console.log('7기가 아니시군요!');
}
```
위의 코드 결과는 '7기가 아니시군요!'가 출력

**if-else if문**
여러 조건에서 여러 작업을 수행하려면 if-else if문을 사용합니다.
```javascript
const lion = 5;
if(lion === 7) {
    console.log('멋쟁이사자처럼 7기');
} else if(lion === 6) {
    console.log('멋쟁이사자처럼 6기');
} else if(lion === 5) {
    console.log('멋쟁이사자처럼 5기');
} else if(lion <= 4) {
    console.log('멋사 조상님..?');
} else {
    console.log('너 멋사 아니지?');
}
```

**switch/case문**
여러 조건에서 여러 작업을 수행할 때, switch/case문을 사용할 수도 있습니다.

```javascript
const job = 'front-end';
switch (job) {
    case 'front-end':
        console.log('fe개발자');
        break;
    case 'back-end':
        console.log('be개발자');
        break;
    case 'designer':
        console.log('디자이너');
        break;
    default:
        console.log('다른 일을 하시나봐요?')
}
```
switch/case 문은 이와 같이 특정 값이 무엇이냐에 따라 다른 작업을 수행 할 수 있게 해줍니다.

switch/case 문에서는 각 case에서 실행할 코드를 작성하고 맨 마지막에 `break;`를 해주어야 합니다. break를 하지 않으면 그 다음 case의 코드가지 실행해버립니다.

그리고, 맨 아래의 `default:`는 job값이 우리가 case로 준비하지 않은 값일 경우를 의미

