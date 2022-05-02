## Can't perform a React state update on an  unmount component

### 상황
1/2차 로그인에서 1차 로그인 성공 후 2차 로그인 컴포넌트를 띄움

### 문제점
다음과 같은 에러 발생
```
Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```
=> 경고! unmounted 된 컴포넌트에서 리액트 상태 업데이트를 할 수 없다.
해덩 작업은 수행되지 않지만 메모리 누수가 발생한다. 해결하려면, useEffect의 클린업 함수 안에서 모든 구독과 비동기 상태의 일들을 취소해라😡

### 해결방법
1) 경고문구에서 나타난 대로 `useEffect`의 cleanup function에서 데이터를 리셋시킨다. 
```
useEffect(() => {
  captcha();
  
  return () => {
    resetValues();
    window.clearTimeout(id);
  }
}

const resetValues = () => {
  setId('');
  setPwd('');
  setErrorMsg(null);
};

```

[참고자료](https://norwayy.tistory.com/m/370)
[참고자료](https://velog.io/@ohgoodkim/-%EC%97%90%EB%9F%AC%EB%85%B8%ED%8A%B8-Cant-perform-a-React-state-update-on-an-unmounted-component)
