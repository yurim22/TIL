## useInterval
기존 setInterval을 활용한 `useInterval` hooks를 확인하고 싶다면 ->  [여기](https://overreacted.io/fr/making-setinterval-declarative-with-react-hooks/)

아래 코드는 `setInterval` 대신에 중첩 `setTimeout`을 활용하여 useInterval hooks를 만들었다.

```javascript
import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
            setTimeout(tick, delay);
        }

        if (delay !== null) {
            let id = setTimeout(tick, delay);

            return () => clearTimeout(id);
        }
    }, [delay]);
};
```

위에 코드로 했더니 타이머가 종료되어도 setTimout 함수가 계속 동작하는 이슈가 있어서 아래와 같이 해결
```javascript
import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval
    useEffect(() => {

        if (delay !== null) {
            let id = setTimeout(function tick() {
                savedCallback.current();
                id = setTimeout(tick, delay);
            }, delay);

            return () => clearTimeout(id);
        }
    }, [delay]);
};
```
이렇게 해야지 clearTimeout(id) 할때 제대로 잡고 지워주더라구...

#### 중첩 setTimeout
무언가를 일정 간격을 두고 실행하는 방법에는 setInterval과 setTimeout을 이용하는 두 가지 방법이 있다.

```javascript
// setInterval 사용하지 않고 중첩 setTimeout 사용
let example = setTimeout(function test() {
    alert('실행');
    example = setTimeout(test, 3000);
}, 3000)
```

두번째 setTimeout은 실행이 종료되면 다음 호출을 스케줄링한다. 중첩 setTimeout은 호출 결과에 따라 다음 호출을 원하는 방식으로 조정해 스케줄링할 수 있기 때문에 setInterval을 사용하는 것 보다 유연하다.

중첩 setTimeout을 사용하면 실제 설정한 지연이 보장된다. 이전 함수의 실행이 종료된 이후에 다음 함수 호출에 대한 계획이 세워지기 때문에 지연 간격이 보장된다.

📌 `setInterval` 함수 : 앞서 진행 중인 코드의 완료 유무와 관계없이 정해둔 시간 간격에 무조건 지정된 코드를 호출하고자 한다. 하지만 지정된 시간 간격에 도달했음에도 불구하고 지정된 코드를 실행할 수 없는 상태라면 setInterval은 이벤트를 큐에 저장합니다. 즉, setInterval을 사용하면 내가 지정한 시간에 무조건 해당 코드가 실행되지만, 이벤트가 중첩되거나 처리할 수 없는 상황인 경우 코드가 무시될 수 있다.

📌 `setTimeout` 함수 : 처음에 지정된 간격만큼 기다린 후 지정된 코드를 실행한 뒤, 지정된 코드가 다 끝난 시점에 다시 setTimeout 함수를 호출한다. 따라서 먼저 실행중인 코드가 지연되더라도 모든 처리가 끝난 다음에 setTimeout을 호출하기 때문에 이벤트가 중첩되지 않고, 모두 실행된다.
