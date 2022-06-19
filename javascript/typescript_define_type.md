## Typescript에서 Interface, Type, Enum 쓰는 법

1. Use an interface instead of a type literal. tslint

=> type : 리터럴 타입의 값에만 사용하고,
=> interface : Object 형태의 타입을 잡아줄 때는 Interface를 사용한다.

```typescript
export type TSomeMemberTier = "Basic" | "Premium" | "Admin";

export interface ISomeMember {
    name: string;
    age: number;
    address: string;
    tier: TSomeMemberTier;
}
```

2. Enum을 쓰는 경우는?

위의 예시도 enum을 써서 할 수 있다.

```typescript
export enum SOME_MEMBER_TIER {
    BASIC = "BASIC",
    PREMIUM = "PREMIUM",
    ADMIN = "ADMIN"
}

export interface ISomeMemeber {
    name: string;
    age: number;
    address: string;
    tier: SOME_MEMEBR_TIER;
}
```

* enum은 기본적으로 number mapping 이지만 string mapping도 할 수 있다. (아무것도 설정하지 않으면 기본적으로 number mapping이 적용됨)
* number mapping을 사용할 경우 실제 데이터에도 number가 들어가서 raw data 보기가 힘들 수 있다.
* 비지니스 로직이 포함된 코드 내에서 상수 사용을 꺼릴 수 있다.

👉 type을 썼을 때

``` typescript
const member: ISomeMemberWithType = {
    /**
     * ...some data
     */
}

if (member.tier === "Basic") {
    // some logic
}

if (member.tier === "Premium") {
    // some logic
}
```

👉 enum을 썼을 때

``` typescript
const member: ISomeMemberWithEnum = {
    /**
     * ...some data
     */
}

if (member.tier === SOME_MEMBER_TIER.BASIC) {
    // some logic
}

if (member.tier === SOME_MEMBER_TIER.PREMIUM) {
    // some logic
}
```

근데 tree-shaking 관점에서는 enum 안쓰고 union type 쓰는게 더 낫다는뎅
