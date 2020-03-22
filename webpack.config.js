module.exports = {
    mode: "production",
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/main.js`,
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                // 拡張子 .js の場合
                test: /\.js$/,
                use: [
                    {
                        // Babel を利用する
                        loader: 'babel-loader',
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // プリセットを指定することで、ES2020 を ES5 に変換
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            }
        ]
    }
};
