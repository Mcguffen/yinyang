##

### 什么是空标签？
没有子元素的标签都是空标签。比如
``` html
    <meta charset="UTF-8">
    <input type="text">
    <img src="" alt="">
```

### 什么是伪类
所有非空的标签都有伪类。
以div为例
``` html
<body>
    <div>
        Hi
    </div>
</body>
```
每一个div标签都有::before和::after两个伪类。
我们把他们掉出来
``` css
div::before{
    content: "「";
} 
div::after{
    content:" 」";
} 
```
然后我们在控制台看到
``` html
<body>
    <div>
    ::before
    "
            Hi
        "
    ::after
    </div>
</body>
```
页面也显示
 「 Hi 」
 但是你复制却只能复制Hi
 这两个不能复制的就是伪元素。
 然后你再写一个div发现 所有的div都带有这2个伪元素
``` html
<body>
    <div>
        Hi
    </div>
    <div>
        Ni
    </div>
    <div>
        Hao
    </div>
</body>
 ```
 页面显示内容为
 「 Hi 」
 「 Ni 」
 「 Hao 」
 你可以理解他是span但是呢 你可以改变样式让他变成块级元素
 ``` css
    display: block
 ```
 这样他就独占一行 

 ### 做一个☯️八卦
    首先，先画一个圆
``` html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>☯️八卦</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="yinyang">
        
    </div>
</body>
</html>
```
``` css
#yinyang{
    border: 1px solid red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
```
    然后，这个圆上面白下面黑。
    你当然可以用div做。
    这次我们用css3的知识渐变来做。
    搜索
    css3 linear gradient generator
    在线网址调节你想要的效果，然后复制粘贴。
    白色#ffffff黑色#000000
    50%处设置左白又黑 51处选黑
    0%          50%         51%          100%
    #ffffff      #ffffff      #000000      #000000
    这样得到下面的样式
``` css
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 100%);
```
现在圆就变成了上白下黑。想要左白又黑就把180deg变成90deg，想要啥效果自己调整一下，试试。

去画突出来的两个小圆。
先做第一个
```
#yinyang > .one{
    border: 1px solid green;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background:#000000;
}
```
这样就得到一个小黑球
让小黑球往下移动一下
使用绝对定位
就是小黑球绝对定位
大球相对定位
``` css
#yinyang{
    border: 1px solid red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    position: relative;
}
#yinyang > .one{
    border: 1px solid green;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background:#000000;
    position: absolute;
}
```
下移动50px
``` css
#yinyang > .one{
    border: 1px solid green;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background:#000000;
    /* 绝对定位 */
    position: absolute;
    top: 50px;
}
```
同理第二个球，在一个球的基础上修改 然后调整位置。
``` css
#yinyang > .two{
    border: 1px solid yellow;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background:#ffffff;
    /* 绝对定位 */
    position: absolute;
    top:50px;
    right: 0;
}
```
同理，再去画2个小圆。
``` html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>☯️八卦</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="yinyang">
        <div class="one"><div class="circle"></div></div>
        <div class="two"><div class="circle"></div></div>
    </div>
</body>
</html>
```

``` css
#yinyang > .one > .circle{
    border: 1px solid green;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background:#ffffff;
        /* 绝对定位 */
    position: absolute;
    left: 40px;
    top: 40px;

}
#yinyang > .two > .circle{
    border: 1px solid green;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background:#000000;
        /* 绝对定位 */
    position: absolute;
    left: 40px;
    top: 40px;

}
``` 
让八卦居中
``` css
        /* 居中 */
    margin: 100px auto;
```
``` css
#yinyang{
    border: 1px solid red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    /* 相对定位 */
    position: relative;
        /* 居中 */
    margin: 100px auto;
}

```
换个背景色

``` css
body{
    background: #ddd;
}

以上是用div写八卦
我们为什么不用伪类代替div来做？

那么就把之前的div删掉
``` html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>☯️八卦</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="yinyang">
    </div>
</body>
</html>
```

``` css
#yinyang::before{
    /* border: 1px solid green; */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background:#000000;
    /* 绝对定位 */
    position: absolute;
    top: 50px;

    display: block;
    content: "";
}
#yinyang::after{
    /* border: 1px solid yellow; */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background:#ffffff;
    /* 绝对定位 */
    position: absolute;
    top:50px;
    right: 0;
    
    display: block;
    content: "";
}
```
这样就用伪类代替了2个div 但是被代替的两个div里面还有div呢？
那么伪类里面还可以装一个伪类吗？是不行的
``` css
#yinyang::before::before{
    content:"hi"
}
```
发现并不能嵌套
那么最小的两个小圆怎么做呢？
还是用
渐变/border
 渐变：这次我们用css3的知识渐变来做。
    搜索
    css3 linear gradient generator
然后自己设置 
还可以用border来做。
border 自己调整大小 宽高 颜色
``` css
#yinyang::before{
    /* border: 1px solid green; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background:#ffffff;
    /* 绝对定位 */
    position: absolute;
    top: 50px;

   
    content: "";
    /* 用border来做最后两个最小的圆 因为设置了border大小所以八卦宽高自己调整 */
    border:40px solid #000000;
}
```
同另外一个
``` css
#yinyang::after{
    /* border: 1px solid yellow; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000000;
    /* 绝对定位 */
    position: absolute;
    top:50px;
    right: 0;

    content: "";
        /* 用border来做最后两个最小的圆 因为设置了border大小所以八卦宽高自己调整 */
    border:40px solid #ffffff;
}
```

下面 加动画让他转起来
