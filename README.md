# 교육대학원생을 위한 웹 앱 개발 입문

Vite + React + TypeScript로 만든 학습용 프론트엔드 웹 앱입니다. 웹 앱의 기본 개념, React 컴포넌트, TypeScript 타입, GitHub와 Vercel 배포 흐름을 카드형 콘텐츠와 체크리스트로 익힐 수 있습니다.

## 실행 방법

의존성이 없다면 먼저 설치합니다.

```bash
npm install
```

개발 서버를 실행합니다.

```bash
npm run dev
```

배포용 파일을 생성합니다.

```bash
npm run build
```

빌드 결과를 로컬에서 미리 확인합니다.

```bash
npm run preview
```

## GitHub에서 Vercel로 배포하기

1. GitHub에 새 repository를 만들고 이 프로젝트를 push합니다.
2. Vercel에 로그인한 뒤 `Add New Project`를 선택합니다.
3. GitHub repository를 선택하고 framework가 `Vite`로 인식되는지 확인합니다.
4. 기본 설정 그대로 배포합니다.
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. 배포가 끝나면 Vercel이 제공하는 URL로 웹 앱을 확인합니다.

## 프로젝트 구조

```text
src/
  App.tsx       학습 콘텐츠와 체크리스트 UI
  App.css       반응형 화면 스타일
  index.css     전역 스타일
```
