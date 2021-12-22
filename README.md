# webpack-template-basic

## webpack 기본 설치
```
npm i -D webpack webpack-cli webpack-dev-server@next

// webpack-cli 와 webpack-dev-server는 버전을 맞춰주어야 한다.
```

## webpack.config.js
웹팩으로 프로젝트를 실행하기 위해서 반드시 필요한 파일로 구성 옵션을 설정

### 기본 구조
```
// 파일을 읽어들이기 시작하는 진입점 설정, 자바스크립트 파일
    // export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정, 자바스크립트 파일
    entry: './js/main.js',
    
    // 결과물(번들)을 반환하는 설정, path는 절대 경로
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true // 기존의 빌드 파일 제거 후 재필드
    }
}
```
