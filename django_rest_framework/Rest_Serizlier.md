# REST Architecture

### REST란?
REpresentational State Transfer
* HTTP를 이용해 통신하는 네트워크상에서 정한 약속
* 분산 하이퍼미디어 시스템을 위한 소프트웨어 설계 형식
* representational : 자원을 대표하는 단어 or 식별자로
* state transfer : 자원의 상태를 전송하는 방법  / 자원 : 인터넷에서 제공하고 얻을 수 있는 모든 것


#### web의 독립적인 측면에서의 rest의 필요성
* 기존의 하위 호환을 깨트리지 않고 네트워크를 독립적으로 발전

#### REST 설계 조건 : REST가 되기 위한 필요충분조건
1. Server - Client
2. Stateless : client의 이전 상태를 기록하지 않는다 / http가 대표적
3. cache
4. uniform interface
5. Layered System
6. code-on-demand

#### API 
Application Program Interface
* 클라이언트와 서버 사이의 메신저 (client---api---server)

### REST API
Rest 아키텍쳐 스타일을 따르는 API

* 근데,, 저 위에 rest 설계 조건 잘 안지켜,,ㅎ
    * json을 활용하기 때문
* 엄밀한 의미에서는 restful api가 아니다

### JSON 직렬화 - Serializer

#### (Model)Form vs (Model)Serializer

| Django | Django Rest Framework |
|:-------|:----------------------|
| Form/ModelForm | Serializer/ModelSerializer |
| Model로부터 Field 읽어옴 |
| 유효성 검사|
| HTML Form | JSON 문자열 |

#### Django vs D.R.F

* serializer(D.R.F) : 모델로부터 Field 생성해서 전송 가능 형식(JSON 문자열)으로 만듬 + 유효성 검사
* Form(Django) : 모델로부터 Field 생성해서 전송가능형식(HTML Form)으로 만듬 + 유효성 검사
