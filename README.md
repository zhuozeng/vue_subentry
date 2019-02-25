# vue_subentry

> 这是一个有意思的项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 规范:

### ​	文件结构

```js
//不用在意名字 注意看目录结构
src(根目录/@)
    home(此为一级目录)
        list(此为二级目录)
        	child(此为三级目录)
```

## 命名规范:

​	**pages 文件夹**下统一使用 **驼峰命名**!!!

​	例如:  newsInfo   goodsList

------------------------------------------------------------

##### 	    -所有文件请编写到 src 目录下!!!!!!

​	-**公共组件**请放置在  " components "  目录下

​	-**静态文件**放置在" assets " 例如 **图片文件**(jpg , png , svg ...)  **引入文件** 如 bootstrap 的css  /  js / font  等文件

```js
//assets文件结构如下(--- 代表下一级目录)
assets
   ---bootstrap
   		---css
   		---js
   		---font
   ---mui
   		---css
   		---js
   ---images
   		---banner.jpg
   		---nav.png
```

​	-**页面组件**  放置在 pages 文件目录下

```js
//pages目录结构  当一级分类页面包含子分类 则如下示例

pages
	---home
		---index.vue
	---category
		---index.vue
		---child (此为文件名!!!)
            ---index.vue
	---seach
```

​	-**公共样式文件**则放置在  **style**

```
style
	---common.css
```

​	-**min.js**文件中 规范 我们统一只使用**主域名**

```js
// 设置vue-resource的请求根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/';
```

​	-**请求** 我们使用

​	  	axios

​	-**用户登录保持** 我们使用 

​		token

​	-**框架**我们尽量只使用 一个!!!
  框架为  vant-ui  已经引入 按需引入!

​	-**模板字符串**统一使用

​		`hello wrld `  和 ${ msg }

​	-请尽量**避免使用**:

​		float , position 

每次**上传**务必写清**完成模块** **! ! !**



开发日志
----------------------------------------------------------------------
pages
	--- category  分类页面
	---	home  	  首页
	--- news	  新闻页面
	--- personalCenter  个人中心
	---	shopping  购物车页面
