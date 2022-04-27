
### src 폴더 밖에서 이미지나 다른 js파일 불러오기?

1. 이미지 태그에 src 속성으로 바로 설정
2. 맨 상단에서 이미지 자체 import
3. css 파일에서 backgournd-image 로 사용

2,3번의 경우 불러올 이미지가 src 폴더 아래 있어야하고, 1번의 경우 public 폴더 아래(index.html과 동등하거나 하위에 있어야 함)

js파일에 import 하거나 css 파일에서 background로 사용되는 경우 모두 컴파일 시 이미지 자체도 포함되어 진행되기에 발생하는 이슈
그러나 img 태그의 src는 컴파일이 완료된 이후에 public/index.html을 기준으로 이미지를 불러온다.

create-react-app에서 import로 엮인 js, css, img등등의 컴파일은 src안에서만 이루어진다.



[참고자료](https://velog.io/@uoayop/React-Module-not-found-You-attempted-to-import-..imglogo.jpg-which-falls-outside-of-the-project-src-directory)
