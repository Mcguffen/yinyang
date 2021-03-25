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

