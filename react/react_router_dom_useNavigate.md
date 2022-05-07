🎅 Link는 특정 주소로 이동해주는 태그였다면, Navigate는 특정 행동을 했을 떄 해당 주소로 이동해줄 수 있게 만들어준다.

## useNavigate
* `useNavigate` 훅을 실행하면 페이지 이동을 할 수 있게 해주는 함수를 반환한다.
=> 양식이 제출되거나 특정 event가 발생할 떄, url을 조작할 수 있는 interface를 제공

### useNavigate의 인자들
```
navigate('url', {replace: true})
```

첫번째 인자로는 주소를 받으면서 두번째 인자로는 {replace, state} 인수를 사용한다.

👉 `replace` boolean
* true : navigate에 적힌 주소로 넘어간 후 뒤로가기를 하더라도 방금의 페이지로 돌아오지 않습니다. 
* false : 뒤로가기가 가능 (default)

=> 예시
1. 로그인 전 : 메인페이지 -> 자산페이지(로그인 필요) 접근 -> 로그인 페이지로 redirect -> 뒤로가기 -> 메인페이지로 이동

해당 예시처럼 이동해야하는데, 로그인 페이지에서 뒤로가기를 눌렀을 때 계속 로그인페이지에 남아있는것을 확인하였다.
사실 정확하게 말하면, 로그인 페이지에 머물러 있는 것이 아니라 이전 페이지였던 자산페이지로 이동하였다가 로그인이 안되어있으니까 로그인 페이지로 튕겨나가는 개념이었다.

해당 이슈를 해결하기 위해서 replace={true}를 추가
```jsx
<Navigate to={{pathname: to}} state={{from: location}} replace={true} />
```

위 처럼 수정하였더니 로그인페이지에서 뒤로가기 버튼을 눌렀을 때 메인페이지로 이동하는 것 확인하였다.


### useNavigate => useHistory(react-router-dom v5)의 기능도 포함
`useNavigate` 는 react-router-dom v5의 `useHistory` 가 변화한 것이라서 useHistory에서 사용하던 window의 history를 이용한 navigate 기능도 할 수 있다.
`navigate(1)` , `navigate(-1)` 등을 통해 페이지 이동이 가능함

## <Navigate>
<Navigate> 요소는 렌더링 될 때 현재 위치를 변경한다. useNavigate를 둘러싼 component wrapper이며 props와 동일한 모든 인수를 허용한다. 
이 태그 역시 to, replace, state를 모두 사용할 수 있다.

* 사용법
```jsx
<Navigate to="login" />
```

## cf) Link vs useNaviagte
Link
* 클릭 시 바로 이동하는 로직 구현 시에 사용
*  ex) 상품 리스트에서 상세 페이지 이동 시

useNavigate
* 페이지 전환 시 추가로 처리해야 하는 로직이 있는 경우 `useNavigate` 사용
* ex) 로그인 버튼 클릭 시
    * 회원가입 되어 있는 사용자 -> main page로 이동
    * 회원가입이 되어 있지 않은 사용자 -> signup page로 이동


참고자료
[link vs useNavigate](https://velog.io/@seokkitdo/React-Link-useNavigate)
[navigate쓰기](https://basemenks.tistory.com/278)
