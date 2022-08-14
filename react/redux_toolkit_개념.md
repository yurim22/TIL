## 🗳 기존 Redux의 단점

Redux는 Flux 아키텍처를 기반으로 잘 설계된 라이브러리지만, 문제점이 있었다.

- 리덕스의 복잡한 스토어 설정
- 리덕스를 유용하게 사용하기 위해서 추가되어야하는 많은 패키지들
- 리덕스 사용을 위해 요구되는 다량의 boilerplate 코드들

💡여기서 잠깐,

- flux 아키텍처란?
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/785b11b7-4d5a-4b02-9850-9b2f1bcfd949/Untitled.png)
    
    단방향 데이터 흐름을 가지면서 **dispatcher → store → view** 순서로 view에서 입력이 발생하면 액션을 통해 디스패쳐로 향한다. 
    

## 🗳 그럼 redux-toolkit은?

위에서 나타난 redux의 문제점을 개선하기 위해 redux-toolkit이 만들어 지게 되었다. 기존 리덕스의 복잡성을 낮추고 사용성을 높여 코드를 작성 할 수 있다.

## 🗳 일단은 시작하기

```bash
$ npx create-react-app toolkit-prac --template=typescript

$ yarn add redux react-redux @reduxjs/toolkit
```

리덕스는 스토어에 모든 state 상태값을 저장한다.

## 🗳 redux-toolkit 에서 사용하는 config

### createSlice

기존에 createReducer와 createAction이 하던 일을 같이 해준다.

따라서 actions을 위한 ts파일을 따로 만들 필요가 없다.

<기본 형태>
```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {name: "", age: 0, email: ""}
export const useSlice = createSlice({
	name : "user",
	initialState: {value: initialState},
	reducers: {
		login: (state, action) => {
			state.value = action.payload
			// state는 우리가 잡아놓은 초기값의 value를 가져오고, 
			// actions안에 payload랑 type이라는 친구를 통해 우리가 바꾸고 싶은 데이터를 원하는 곳에다가 넘겨줌
			},
    logout: (state) => {
      state.value = initialState;
    }
	}
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

```
