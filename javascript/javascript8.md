&#9997; Javascript 입문 제 8강
======================
# 반복문

특정 작업을 반복하려할 때, 우리는 반복문을 사용할 수 있습니다.

반복문의 종류는 아래와 같아요

* for 문
* while 문

*****************************
### for문
for문은 아래와 같은 구조로 이루어져 있습니다.

```javascript
for(*/ 초기 구문; 조건 구문; 변화 구문; */) {
    // 코드
}
```
for문으로 0부터 9까지 정수를 출력할때는?

```javascript
for(let i = 0; i < 10; i++){
    console.log(i);
}
//변수선언은 let으로 해줘야한다.!!
```

*********************************
#### 배열과 for
배열의 여러 기능 중에서 `length`값을 통해 for문에서 배열을 활용할 수도 있습니다.

```javascript
const staff = ['철수', '영희', '짱구', '맹구'];

for(let i = 0; i < staff.length; i++){
    console.log(staff[i]);
}
```

************************************
### while
while문은 특정 조건이 참이라면 계속해서 반복하는 반복문입니다. for문은 특정 숫자를 가지고 숫자의 값을 비교하고, 증감해주면서 반복을 한다면, while문은 조건을 확인만 하면서 반복을 합니다.

아래에는 0 부터 9까지 출력하는 반복문을 while문을 통해 작성해보겠습니다.

```javascript
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
```
**********************************

#### break & continue

반복문 안에서는 `break`와 `continue`를 통해서 반복문에서 벗어나거나, 그 다음 루프를 돌게끔 할 수 있습니다.

```javascript
for (let i = 0; i < 10; i++) {
    if (i===4) continue;  //다음 루프를 실행
    console.log(i);
    if (i ===7 ) break;  //반복문을 끝내기

}
```

i가 4 일땐 continue를 하여 원래 console.log를 해야 하지만 그 코드를 수행하지 않고 바로 다음 루프인 5로 넘어갑니다.

i가 7일땐 break를 하여 반복문을 종료시킨다.