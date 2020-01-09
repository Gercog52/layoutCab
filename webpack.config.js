const path = require('path');

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

        }]
    },
    //dev
    devServer: {
        //port: 9000,
        overlay: true,
    }
}