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

### 자바스크립트 배열의 내장 함수

**concat**

concat은 배열에 특정 값, 혹은 또 다른 배열을 붙여주는 내장 함수 입니다. 그리고, 기존의 배열은 건드리지 않습니다.

```javascript
const array = [0,1,2];

const after = array.concat(3);  //결과 [0,1,2,3]

const stick = array.concat([4,5,6]); // 결과 [0,1,2,4,5,6]

```

**map**

기존에 있는 배열을 가지고 특정 로직을 통하여 새로운 배열을 만들어 낼 때 사용합니다.

```javascript
const array = [0,1,2,3,4,5];
function square(number) {
    return number * number;
}

const squared = array.map(square);
//결과 : [0,2,4,9,16,25]
```

map 에서 사용 할 함수를 따로 선언하지 않고, map 내부에 작설 할 수도 있다.

```javascript
const array = [1,2,3,4,5];

const squared = array.map(n => n*n);
```

map 함수의 핵심은, 기존의 배열은 건들이지 않는다는 것 입니다.

리액트에서는 이 map 함수가 주로 두가지 용도로 사용된다.

* 컴포넌트 배열 랜더링
* 불변성 지키면서 데이터 변환

(1) 컴포넌트 배열 랜더링

첫번째는 배열의 내용을 렌더링 해야 할 때 입니다.
우리가 방금 숫자를 제곱한 것 처럼, 데이터들로 이뤄진 배열을 가지고 JSX의 배열로 변활 할 수 있습니다.

```javascript
const ShowNumbers = () => {
    const array = [0,1,2,3,4,5];
    const numberList = array.map(n => <div key={n}>{n}</div>)

    return (
        <div>{numberList}</div>
    )
}
```

컴포넌트를 배열형태로 랜더링 할 때에는, key값을 사용해야 하는데, 이 값은 고유해야한다. 리액트에서는 배열 형태의 컴포넌트들을 렌더링하고, 내부의 정보가 변경되거나, 새로 추가될 시에 이 key값을 참고하여 효율적으로 변화를 일으킵니다. 

주로 이 key값은, 고유해야 하기에 데이터베이스에서 전달되는 고유 ID로 설정됩니다. 만약에 데이터베이스가 따로 없는 경우엔, 데이터를 등록 할 때마다 고유한 ID값을 직접 집어 넣어주어야 하고, 고유한 ID가 없으면 기본적으로는 그냥 배열의 순서값(index)가 key로 설정됩니다.

만약에 key를 설정하지 않으면 리액트에서 경고를 띄우게 되는데 이 경고가 보고싶지 않다면 직접 index 값을 key로 넣어주면 되긴합니다. map 함수에서 두번째 index 값이여서, 이렇게 할 수 있습니다.

```javascript
const numberList = array.map((n, i) => <div key={i}>{n}</div>)
```

그런데 결코 좋은 방법은 아니므로 왠만하면 피해야한다. 


(2)불변성 지키면서 데이터 변환

두번째로는, 리액트에서 컴포넌트에서 사용하는 상태를 업데이트 해주려면 기존의 데이터를 건들이지 않고 새로 만들어주는 방식으로 값을 설정해주어야합니다. 

따라서 만약에 배열에 있는 특정한 데이터를 바꾸고 싶을 땐 이렇게 할 수 있습니다.

```javascript
const data = [
    {
        id: 0,
        value: true
    },
    {
        id: 1,
        value: false
    },
    {
        id: 2,
        value: false
    }
];
const nextData = data.map(
    o => (o.id === 1)
        ?{ ...o, value: !o.value }
        : o
);
```

이렇게 하면 기존 데이터를 수정하지 않으면서 새 값을 지니고 있는 새 데이터를 만들 수 있다.

불변성을 지키는 이유는, shouldComponentUpdate로 필요할 때 성능 최적화를 할 수 있게 하기 위함입니다.

**filter**

filter 함수는 데이터 배열에서 특정 조건을 만족하는 원소들만 골라서 새 배열을 만들어줄 때 사용합니다.

```javascript
const numbers = [0,1,2,3,4,5];
const gtThree = numbers.filter(n => n > 3);
//결과 : [4,5]
```
이것을 응용해서, 기존 데이터는 그대로 두면서 특정 원소를 제거시킨 배열을 새로 만들어  낼 수도 있습니다. 예를 들어 위 배열에서 3을 없애고 싶다면 이렇게 할 수 있다.

```javascript
const numbers = [0,1,2,3,4,5];
const withoutThree = numbers.filter(n => n !== 3);
//결과 [0,1,2,3,4,5]
```
이는 불변성을 지키며 데이터를 제거시켜야 할 때 유용하게 사용 할 수 있습니다.

