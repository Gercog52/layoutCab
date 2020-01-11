const path = require('path');
const MiniCssExtranctPlagin = require('mini-css-extract-plugin');

const PATH = {
    src: path.join(__dirname,'./src'),
    dist: path.join(__dirname,'./dist'),
}

module.exports = {
    entry: {
        app: `${PATH.src}/index.js`
    },
    output: {
        filename: '[name].js',
        path: `${PATH.dist}`,
        publicPath: '/dist',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
        },{
            test: /\.css$/,
            loader: [
                'style-loader',
                MiniCssExtranctPlagin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path:'./postcss.config.js'
                        }
                    }
                }
            ]
        },{
            test: /\.sass$/,
            loader: [
                'style-loader',
                MiniCssExtranctPlagin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: './postcss.config.js'
                        }
                    }
                },
                'sass-loader'
            ]
        }
    ]},
    // bield
    plugins: [
        new MiniCssExtranctPlagin({
            filename: '[name].css',
        }),
    ],
    //dev
    devServer: {
        port: 9001,
        overlay: true,
    },
}