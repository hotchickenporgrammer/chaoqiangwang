# chaoqian-pc

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8089
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 注意：该项目使用了eslint

# 在开发时 untils/http.js更改base_url



安装项
# axios,
# qrcodejs2 // 用于生成二维码
# element-ui 按需引入组件
# js-md5
...

路由使用懒加载缩小主js文件的体积


``` bash
# 打包正式版时 把/config/index.js 里的
    productionSourceMap: false,
# 改成false,减少体积 开发时改成true, 
 
```

