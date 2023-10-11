### 이미지 업로드 시, 파일(이미지), 제목, 내용을 입력하고 DB에 저장 할 때

FormData 

- file - image
- data - 제목, 내용

🗨️ **FormData 객체** 

: 폼의 각 필드와 값을 나타내는 키/값 쌍들의 집합을 쉽게 구성할 수 있는 방법을 제공한다.

: 이를 이용하면 데이터를 `multipart/form-data` 형식으로 전송할 수 있다.

🗨️ **Blob(Binary Large Object)**

: 이미지, 사운드, 비디오와 같은 멀티미디어 데이터를 다룰 때 사용할 수 있다.

- **file ⇒ `multipart/form-data`**
- **data ⇒ `application/json`** 형식으로 보내기 위해 blob을 사용

```jsx
let blob = new Blob(array, options)
```

### 사용 코드

```jsx
const onCreate = () => {
	// FormData 객체 생성
  let formData = new FormData()
	// image file 추가
  formData.append("file", files[0])
	// 내용 생성
  let variables = [{
    title: "title",
    content: "content"
  }]
	// blob 형식으로 내용객체 생성 + type: "application/json" 으로 지정
  formData.append("data", new Blob([JSON.stringify(variables)], {type: "application/json"}))
	
	// axios를 통해 formData 전달
  Axios.post("/create/list", formData)
}
```
