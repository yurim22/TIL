## useEffect💨

`useEffect`는 함수 컴포넌트 내에서 side effets를 수행할 수 있게 해준다.

* side effects : 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직업 조작하는 작업
  => 이것들은 다른 컴포넌트에 영향을 줄 수도 있고, 렌더링 과정에서는 구현할 수 없는 작업이다.
  
`useEffect`를 사용하면 React는 DOM을 바꾼 뒤에 "effect"함수를 실행한다. 기본적으로 리액트는 매 렌더링 이후에 effects를 실행시키는데, 첫번째 렌더링도 포함된다.

### useEffect 실행순서 

결론부터 말하면 하위에 있는 컴포넌트 먼저 실행된다.
useEffect는 컴포넌트가 렌더링 된 후에 실행되는 것이다. A > B > C 순서로 component가 있다고 가정했을 때, A component가 `render` 되기 위해서는 B component가 먼저 렌더링 되어야 하고, 
B component가 완전히 렌더링 되기 위해서는 C component가 렌더링 되어야 한다.

```javascript
export default function A() {
  useEffect(() => {
    console.log('A');
  }, []);
  return (
    <div>
      <h1>useEffect 순서 test</h1>
      <B />
    </div>
  )
}

const B = () => {
  useEffect(() => {
    console.log('B');
  }, []);
  return (
    <>
      <h2>B component</h2>
      <C />
    </>
  )
}

const C = () => {
  useEffect(() => {
    console.log('C');
  }, []);
  return (
    <>
      <h2>C component</h2>
    </>
  )
}
```

```
output :
C 
B
A
```
