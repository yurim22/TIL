## Make PrivateRoute component in react-router v6

### 상황
react-router v6에서 기존 PrivateRoute component 사용

### 이슈
[PrivateRoute] is not a <Route> component. All component children of <Routes> must be a <Route> or <Route.Fragment>

### 설명
기존에 있던 `privateRoute` component에서는 해당 컴포넌트 안에서 `<Route>` component를 정의하고 또는 <Redirect> 시켰지만, 
react-router v6에서는 `<Routes>` 바로 자식으로 `<Route>`가 있어야 하고, <Redirect> 대신 `<Navigate>`를 사용
