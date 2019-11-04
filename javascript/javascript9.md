&#9997; Javascript 입문 제 9강
======================
# 프로토타입과 클래스

### 객체 생성자
프로토타입과 클래스를 다루기 전에, 객체 생성자에 대하여 알아보겠습니다. 객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현 할 수 있게 해줍니다.

```javascript
function Lion(name, major, staff) {
    this.name = name;
    this.major = major;
    this.staff = staff;
    this.lion = function() {
        if(this.staff) {
            console.log("운영진사자" + this.name);
        }else {
            console.log("아기사자" + this.name);
        }
    };
}

const yurim = new Lion('서유림', '융소', false);
const jessi = new Lion('jessi', '영어영문', true);

yurim.lion();  //아기사자 서유림
jessi.lion(); // 운영진사자 jessi

```

객체 생성자를 사용 할 때는 보통 함수의 이름을 대문자로 시작하고, 새로운 객체를 만들 때에는 **new** 키워드를 앞에 붙여주어야 합니다.

위의 코드에서는 yurim과 jessi의 lion 함수는 동일한 작업을 수행함에도 불구하고 객체가 생성될 때마다 함수가 새로 생성되어 this.lion으로 설정되고 있습니다.

같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있는데, 바로 프로토타입 입니다.
***********************************

#### 프로토타입
프로토타입은 아래와 같이 객체 생성자 함수 아래에 `.prototype.[키 값] = 코드`를 입력하여 설정 할 수 있습니다.

```javascript
function Lion(name, major, staff) {
    this.name = name;
    this.major = major;
    this.staff = staff;
};

Lion.prototype.lion = function(){
    if(this.staff) {
        console.log("으른사자" + this.name);
    } else {
        console.log("아기사자" + this.name);
    }
};
Lion.prototype.sharedValue = 1;

const yurim = new Lion('서유림', '융소', false);
const brian = new Lion('brian', '경영', true);

yurim.lion();
brian.lion();
```
********************************
#### 객체 생성자 상속 받기
예를 들어 우리가 yurim과 bom이라는 새로운 객체를 만든다고 가정해봅시다. 그리고, 해당 객체 생성자들에서 Lion의 기능을 재사용한다고 가정해봅시다. 그렇다면 아래처럼 구현 할 수 있습니다.

```javascript
function Staff(name, major) {
    Lion.call(this, true, name, major);
}
Staff.prototype = Lion.prototype;

function Member(name, major) {
    Lion.call(this, false, name, major);
}
Member.prototype = Lion.prototype;

const yurim = new Staff('서유림', '융소');
const bom = new Member('봄이', '개');

```
새로만든 Staff와 Member함수에서 `Lion.call`을 호풀해주고 있는데, 여기서 첫번째 인자에는 this를 넣어주고, 그 이후에는 Lion객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야 합니다.

******************************
### class
클래스라는 기능은 ES6에서부터 생겨났습니다. 

이는 우리가 객체 생성자로 구현했던 코드를 조금 더 명확하고, 깔끔하게 구현 할 수 있게 해줍니다. 또한 상속도 훨씬 쉽게 해줄 수 있습니다.

```javascript
class Lion {
    constructor(name, major, staff) {
        this.name = name;
        this.major = major;
        this.staff = staff;
    }
    lion() {
        if(this.staff) {
            console.log("으른사자" + this.name);
        } else {
            console.log("아기사자" + this.name);
        }
    }
}

const yurim = new Lion('서유림', '융소', false);
const bom = new Lion('봄이', '개', true);
```
여기서 우리가 lion이라는 함수를 클래스 내부에 선언 하였는데, 이를 'method'라고 부른다. 이렇게 메서드를 만들면 자동으로 prototype으로 등록이 된다.

*************************
`class`를 사용하면, 다른 클래스를 쉽게 상속 할 수 있다.

```javascript
/* 이어서 */

class Staff extends Lion {
    constructor(name, major){
        super(name, major, true);
    }
}
class Member extends Lion {
    constructor(name, major){
        super(name, major, false);
    }
}

const bom = new Staff('봄이', '개');
const yurim = new Member('서유림', '융소');
```
상속을 할 때는 `extends`키워드를 사용하며, constructor에서 사용하는 `super()`함수가 상속받은 클래스의 생성자를 가르킵니다.
