---
title: hexo添砖加瓦——图片放大
tags:
  - null
categories:
  - 博客管理
message: '您好, 这里需要密码.'
comment: true
copyright: true
sitemap: true
top:
photos:
password:
hide:
---
两种实现效果：鼠标点击放大 和 鼠标hover放大，建议联合使用

<!--more-->

> 阅读此文前建议先查看{% post_link 本博客信息 %}

先丢张图给你们看看效果：

![test](https://cdn3.myhloli.com:20443/images/2016/01/19/3f02dab9379d580ff6d96d4112dd7307.jpg)
![test](https://source.unsplash.com/juHayWuaaoQ/1500x1000)

# 鼠标点击放大

---

ps：一开始我找到了[lightbox](https://www.cnblogs.com/yadongliang/p/10859206.html#_label2_3)实现方式，不过效果一般。然后我发现了[fancybox](http://fancyapps.com)，官网有示例，很酷炫的效果，以影集的形式显示，对视频也有效。尝试把fancybox加入到博客中，最后在[v2ex](https://www.v2ex.com/t/252222)发现，原来next主题自带了fancybox和mediumzoom两种实现方式。

> 在next配置文件_config.yml中设置fancybox或mediumzoom为true即可（注意不要设置到vendors变量下的fancybox，那里是设置js和css文件路径的地方），我的next版本默认使用fancybox 3的cdn（可在配置文件vendors中查看）,想自定义请参考[theme-next-fancybox3](https://github.com/theme-next/theme-next-fancybox3)

> 如果想自定义fancybox的功能，找到```themes/next/source/js/src/utils.js```文件,将其中的

```javascript
$('.fancybox').fancybox({
	loop   : true,
	helpers: {
	overlay: {
		locked: false
	}
	}
});
```

换成

```javascript
$('.fancybox').fancybox({
	buttons : [ 
		'slideShow',
		'share',
		'zoom',
		'fullScreen',
		'thumbs',
		'close'
	],
	thumbs : {
		autoStart : true
	},
	hash : true,
	loop : false,
	keyboard : true,
	toolbar : true,
	animationEffect : "zoom",
	arrows : true,
	clickContent : "zoom"
});
```

具体参数含义请查看[fancybox官网文档](https://fancyapps.com/fancybox/3/docs/)

如果要取消图片alt属性显示请参考[issue#1293](https://github.com/theme-next/hexo-theme-next/issues/1293)，编辑utils.js中的

```javascript
var imageTitle = $image.attr('title') || $image.attr('alt'); //等号后面改成''就行了
```
Q:fancybox为什么放大按钮点击不了？  
A:官方示例是a链接里的href填大图url，img里src填缩略图url。

Q:你之前放的测试图a的href和img的src明明一样啊，为什么能放大？
A:这个图从fancybox官方扒来的，比较特殊，如果直接在浏览器打开你会发现。应该是与使用的图床有关系，比如：[这里](https://img.myhloli.com/image/jhTJg)。

**所以建议不使用图床的同学把fancybox当作影集工具使用，放大功能还是用下面的方式实现吧。（有更好的建议欢迎留言分享）**

# 鼠标hover放大

---

参考[此博文](https://www.cnblogs.com/jackson0714/p/BeautifyBlog_10.html)的css实现方式，对代码稍作修改后，加入```根目录/source/_data/styles.styl```文件（没有则手动创建），代码如下：

```css
// 图片放大
// --------------------------------------------------
.post-body p img
{
    // z-index: 1000; //设置为最顶层，以免左侧导航栏遮挡
    position: relative;
    // cursor: pointer;//鼠标样式：手势
    transition: all 1.2s; //放大动画的时间：1.2s
}
.post-body img:hover {
    transform: scale(1.4); //放大倍数：1.4倍
}
```

同时在next配置文件中的```custom_file_path:```设置```style: source/_data/styles.styl```