&#9997; Javascript 입문 제 7강
======================
# 배열

배열은 Javascript 객체의 특별한 형태입니다. 배열은 단일 데이터가 아닌 다수의 데이터를 저장할 수 있고, 연관성이 있는 데이터를 같이 저장하므로 저장한 데이터를 찾는데 용이합니다.

예를 들어서 문자열 배열을 선언해봅시다.

```javascript
const staff = ['철수','영희', '짱구','맹구'];
```
배열을 선언할 때에는 `[]`문자로 감싸주면 됩니다.

아래와 같이 객체 배열도 만들 수 있습니다.

```javascript
const staff = [{name:'철수'},{name: '영희'}, {name: '짱구'}, {name:'맹구'}];
```
배열을 선언한 후, n번째 항목을 조회하려면 아래와 같이 하면 됩니다.

```javascript
staffs[n];

console.log(staffs[0]); //Object {name: '철수'}
```
*******************************

#### 배열 항목 추가

배열에 새 항목을 추가하려면 배열의 내장함수 `push`함수를 사용하면 됩니다.

```javascript
const staff = [{name:'철수'},{name: '영희'}, {name: '짱구'}, {name:'맹구'}];

staff.push({
    name: '훈이'
});
```
******************************
#### 배열의 크기 알아내기
배열의 크기를 알고 싶을 때에는 배열의 `length`값을 확인하면 됩니다.

```javascript
const staff = [{name:'철수'},{name: '영희'}, {name: '짱구'}, {name:'맹구'}];

console.log(staff.length); //4
```