# fitpet 모바일웹

## Package 설치 및 npm script 실행
```
npm i
npm run dev-watch (localhost:8080)
npm run prod
```

## Webpack 설정
- `npm run prod`로 Build하면 dist 폴더로 번들링
- Server 실행이나 Build하면 기존 dist 폴더는 클린


## React 소스 설정 설명
- React + typescript + styled-jsx + babel + webpack을 사용한 구조로 되어 있다.
- webpack에는 번들링 및 빌드시 Clean 기능 및 minify, aglify 등의 기타 설정을 적용 (webpack.config.js 참고)
- typescript는 환경에 맞게 설정 (.tsconfig 참고)
- style을 scoped를 위한(사이드 이펙트를 줄이기 위한) 라이브러리로 styled-jsx를 사용했다.  기본적으로 Next.js(React SSR)에서 사용하도록 설계되어 있어 React(SPA)로 개발된 해당 소스에 맞게 babel에 플러그인을 바인딩 하였다. 또한 Scss를 사용하기 위해 Scss 플러그인 추가 (.babelrc 참고) 
- styled-jsx github: https://github.com/vercel/styled-jsx

## fitpet 소스 구조 설명
- 기본적으로 src에 리액트/typescript 소스가 있음
- src/@type은 typescript의 global type
- src/fitpet이 fitpet Mobile web source
- Assets: 이미지 / 폰트
- Component: 프레젠테이션 컴포넌트
- Enums: 상수로 사용될 값을 정리
- Interface: typescript의 인터페이스
- Layouts: 컨테이너 컴포넌트
- Mock: Mock Data로 사용
- Styles: Global style과 각각의 컴포넌트에서 scoped하게 사용되는 스타일
- App/index: 리액트를 주입하고 App을 시작하는 소스
