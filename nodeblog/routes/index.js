var express = require('express');
var router = express.Router();

/* 生成一个路由实例用来捕获访问主页的GET请求，导出这个路由并在app.js中通过app.use('/', routes); 加载。
这样，当访问主页时，就会调用res.render('index', { title: 'Express' });渲染views/index.ejs模版并显示到浏览器中 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '主页' });//res.render() 渲染模版.// 并将其产生的页面直接返回给客户端。它接受两个参数，第一个是模板的名称，即 views 目录下的模板文件名，扩展名 .ejs 可选。第二个参数是传递给模板的数据对象，用于模板翻译
});
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });//res.render() 渲染模版.// 并将其产生的页面直接返回给客户端。它接受两个参数，第一个是模板的名称，即 views 目录下的模板文件名，扩展名 .ejs 可选。第二个参数是传递给模板的数据对象，用于模板翻译
});
router.post('/reg', function(req, res, next) {
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});
router.post('/login', function(req, res, next) {
});
router.get('/post', function(req, res, next) {
  res.render('post', { title: '发表' });
});
router.post('/post', function(req, res, next) {
});
router.get('/logout', function(req, res, next) {
});
module.exports = router;
