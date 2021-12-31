// 웹팩으로 프로젝트를 실행하기 위해서 반드시 필요한 파일로 구성 옵션을 설정
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
// export
module.exports = {
    // 파일 불러올 때 확장자 생략
    resolve: {
        extensions: ['.js', '.vue'],
        // 경로 별칭
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets'),
        }
    },

    // 파일을 읽어들이기 시작하는 진입점 설정, 자바스크립트 파일
    entry: './src/main.js',
    
    // 결과물(번들)을 반환하는 설정, path는 절대 경로
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true // 기존의 빌드 파일 제거 후 재필드
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    'vue-style-loader',
                    'style-loader', // 해석된 css를 html 파일에 설정
                    'css-loader', // css를 해석
                    'postcss-loader', // css 후처리
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader',
            }
        ]
    },
   
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    // html-webpack-plugin을 통해 빌드에 html 파일 추가
    // copy-webpack-plugin을 통해 빌드에 정적 파일 추가
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),

        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        }),
        new VueLoaderPlugin()
    ],

    // 개발 서버 설정
    devServer: {
        host: 'localhost'
    }
}
