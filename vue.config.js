module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/covid19/' : '/',
    devServer: {                //webpack-dev-server配置
        host: 'localhost',
        port: 8080,            //配置本项目运行端口
        proxy: {                //配置代理服务器来解决跨域问题
            '/getmap': {
                target: 'https://c.m.163.com/ug/api/wuhan/app/data/list-total',      //配置要替换的后台接口地址
                ws: true,//代理websocked
                changeOrigin: true,
                secure: true, //target是否为https接口
                pathRewrite: {
                    '^/getmap': ''
                }
            },
        }
    },
}