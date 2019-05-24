module.exports = {
    //入口
    entry: {
        // 可以有多个入口，也可以有一个，如果有一个就默认从这个入口开始解析
        "main":"./main.js"
    },
    output:{
        filename:'./build.js'
    },
    watch:true ,  //文件监视改动，自动编译
    // watchOptions: {
    //     poll: 1000, //检测代码修改时间，以毫秒为单位
    //     aggregeateTimeout: 500, //防止重复保存而发生重复编译错误，这里设置的500为半秒内重复保存，不进行打包操作
    //     ignored: /node_modules/ //不监听目录，使用正则匹配
    // },
    module:{
        rules:[
            {
                //遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件
                //然后会使用style-loader生成style标签放入header中
                test:/\.css$/,
                loaders:'style-loader!css-loader'
            }
        ]
    }
}
