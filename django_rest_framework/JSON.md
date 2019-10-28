Restful API in Django 
===========
# JSON이란?

* JavaScript Object Notation의 약자
+ 데이터의 송수신을 자바스크립트의 객체로서 수행할 수 있게끔 하는 가벼운 문자열 데이터 표현식 (가벼운 소포, 가벼운 상자)
- django나 php 서버에서도 json이 있기 때문에 정보 교환이 가능하다

* 구조 : html / 스타일 : css / 논리 : javascript
+ **Request & Response Data only : JSON**


## JSON 문법 형식

### 자바스크립트 객체로 그냥 보내면 되나?
* 모든 수신자가 자바스크립트 객체 표현식을 아는것은 아니다.

* => 그럼 자바스크립트 문법(객체)을 그대로 보내는 대신, **'만국공통 자료형'으로 보내자**
+ = 모두가 아는 자료형? = **문자열!!**
- 직렬화(serialization)을 하게됨

#### JSON : 문자열로 보낸다

+ 보낼때는 객체를 문자열로 / 받을 때는 문자열을 객체로 바꿔받음 (사용자 입장에서)

#### 공식 사이트 : www.json.org

```python
import json

diary = {
    'id' : 3,
    'title' : 'I\'m starving...',
    'body' : 'On nana On na On nanana deal car', 
}

print(diary)
print(type(diary))

diary_s = json.dumps(diary)    #dumps : dictionary --> json

print(diary_s)
print(type(diary_s))   #<class 'str'>

diary_back = json.loads(diary_s)

print(type(diary_back))  #<class 'dict'> 
```

# HTTP Request & Method

* HTTP : 우리 이런 식으로 통신하자~~ 서버와 사용자를 연결

### HTTP Method in Django
(사용자 --> 서버)

| Method | Meaning |
|:-------|:---------|
| get | 요청받은 URL의 정보를 검색하여 응답한다. |
| POST | 요청된 자원을 생성(create)한다.|
| PUT | 요청된 자원을 수정(update)한다.|
| DELETE | 요청된 자원을 삭제한다 |
| PATCH | 요청된 자원의 일부를 교체(수정)한다.|
| OPTION | 웹서버에서 지원되는 메소드의 종류 확인한다.|

예)
http://likelion.net/post 이라는 url
* GET : 글 목록을 갖다 줘
* POST : 새 글을 작성할래

예)
http://likelion.net/post/1 이라는 url에서
* GET : 1번 글을 갖다 줘
* DELETE : 1번 글을 지워줘
* PUT(PATCH) : 1번 글에 이런 내용을 이렇게 수정해줘
* POST는 ...굳이? 있을 필요는 없다

### HTTP Response
(사용자 <-- 서버)

* 1xx (정보) : 요청을 받았으며 프로세스를 계속한다
* 2xx (성공) : 요청을 성공적으로 받았으며 인식했고 수용했다.
* 3xx (리다이렉션) : 요청 완료를 위해 추가 작업 조치가 필요하다
* 4xx (클라이언트 오류) : 요청의 문법이 잘못되었거나 요청을 처리할 수 없다.
* 5xx (서버오류) : 서버가 명백히 유효한 요청에 대해 충족을 실패했다.

# Httpie

#### client --> server : request
#### client <-- server : response

### Httpie 설치

terminal에서 실시

```
pip install --upgrade httpie
```
```
http get example.com
```
example.com의 json data 파일을 받게 된다

```
http httpbin.org/get x==1 y==2
```

```
http --form httpbin.org/post x=1 y='hello'
```
json형식으로 받기
```
http --json post 'httpbin.org/post' x=1 y="hello"
```
관련 url : https://httpie.org

# CBV(Generic View)

1. 왜 굳이 클래스?
2. 함수로 작성한 것과 뭔 차이?
3. Views.py는 뭘로 채워 넣어야 되나?


### views.py는 function과 class로도 정의가 가능한데, django의 view는 callable object(function, class)로 정의한다.

* function 과 class의 차이점?
    * 상속의 유무(class)
    * customize 할때는 내가 함수 설정해서 하는게 편하지..

* 간단한 만큼 미리 약속된 것들이 많다.
    * "이거 알지? 생략한다~~!"

