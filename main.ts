console.log("hi")
// var yinyang = document.getElementById("yinyang")
let html = document.getElementById('html')
// 写样式
let style = document.querySelector('#style')
let string = `
/*你好，html我们已经写好了,接下来我要加样式了。
首先,去掉浏览器自带的样式。*/

* {
    margin: 0;
    padding: 0;
    font-size: 10px;
    box-sizing: border-box;
  }
*::after {
  box-sizing: border-box;
}
*::before {
  box-sizing: border-box;
}

/*然后*/
#html {
  word-break: break-all;
}

/*修改一下背景颜色*/
body{
    background: #ddd;
}


/*使用css border调试大法。
border: 1px solid red;这样就可以看到我要操作的内容了。
我要加的样式是：将id="yinyang"的div宽高设置成200px*/
#yinyang{
    border: 1px solid white;
    width: 200px;
    height: 200px;
}

/*让div居中*/
#yinyang{
    /* 相对定位 */
    position: relative;
        /* 居中 */
    margin: 100px auto;

}

/*一步步来，想做八卦先做一个圆。*/
#yinyang{
    border-radius: 50%;
}
/*
圆画好了，下一步怎么做呢？
在圆中画个 S 当然这样挺难，我们把圆对半分。
八卦是阴阳两极之相。
我们先绘制一下阴阳两极。
*/
#yinyang{
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}


/*两仪成,我们用伪元素来画2个小圆。首先还是加border*/
#yinyang::before{
    border: 1px solid green;
    /* 绝对定位 */
    position: absolute;
    top: 50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background:#ffffff;
 

    display: block;
    content: "";
}
#yinyang::after{
    border: 1px solid yellow;
    /* 绝对定位 */
    position: absolute;
    top:50px;
    right: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #000000;
    display: block;
    content: "";
}
/*

这样就用伪元素代替了2个div 但是被代替的两个div里面还有div呢？
那么伪元素里面还可以装一个伪元素吗？是不行的。
最后两个最小的圆怎么做？
用border来做。
border 自己调整大小 宽高 颜色

*/
#yinyang::before{
    content: "";
    /* 用border来做最后两个最小的圆 因为设置了border大小所以八卦宽高自己调整 */
    border:40px solid #000000;
}
#yinyang::after{
    content: "";
        /* 用border来做最后两个最小的圆 因为设置了border大小所以八卦宽高自己调整 */
    border:40px solid #ffffff;
}

/*声明关键帧，这个动画一些关键的位置*/
@keyframes spin {
  /* 一开始的位置 */
  form {
    /* 一开始转0度 */
    transform: rotate(0deg);
  }
  /* 最后 转360度*/
  to {
    transform: rotate(360deg);
  }
}
#yinyang{
  /*加动画 去声明关键帧 然后 怎么一直转 加infinite意思无限的*/
  /* 转的也太不自然了吧 加一个linear 线性的转  感觉快就调大，1s一圈改10s一圈试试*/
  /* 参数顺序不重要 会自动匹配 */
  animation: spin 10s infinite linear; 
}
/*
太极不明显,加阴影。
*/
#yinyang{
  /*加动画 去声明关键帧 然后 怎么一直转 加infinite意思无限的*/
  /* 转的也太不自然了吧 加一个linear 线性的转  感觉快就调大，1s一圈改10s一圈试试*/
  /* 参数顺序不重要 会自动匹配 */
  animation: spin 10s infinite linear;
    /* 总觉八卦不明显 加一个css3属性 阴影 */
  /* 不会用就搜 你要的属性+generator */
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75); 
}


`;
let string2 = ''
// 这个replace只会把第一个回车变成换行
// 我们要用到正则表达式了
// 然后又发现了一个bug 他会打出<来
// string=string.replace(/\n/g,"<br>")
let n = 0
// 通过setTimeout模拟了setInterval
// 这样做的好处是可以随时停止
let step = () => {
    setTimeout(() => {
        if(html){
            if (string[n] === '\n') {
                string2 += '<br>'
            } else if (string[n] === ' ') {
                // 如果是空格
                string2 += '&nbsp'
            } else {
                // 如果不是回车就照搬
                string2 += string[n]
            }
            html.innerHTML = string2
            if(style){
                style.innerHTML = string.substring(0, n)
            }
            window.scrollTo(0,9999)
            html.scrollTo(0,9999)
            if (n < string.length - 1) {
                // 不是最后一个
                step();
                n++
            } else { }
        }

    }, 30)
}
step()

// console.log(yinyang)
// // 设置个开关 来判断什么时候可以拖拽什么时候停下。
// var dragging: boolean = false

// // 记录鼠标位置
// var position = [0, 0]
// // div1 不为空执行下面
// if(yinyang){
// // 鼠标点下不松
// yinyang.onmousedown = function(e){

//     dragging = true
//         // 鼠标按下的时候记录鼠标位置
//     position = [e.clientX,e.clientY]
// }

// document.onmousemove = function(e){
//         // console.log(e.clientX, e.clientY)
//         if(dragging === true){
//             // console.log(e.clientX, e.clientY)
//             var deltaX = e.clientX - position[0]
//             var deltaY = e.clientY - position[1]
//             if(yinyang){
//             // 由于js有bug div.style.top只有取得内敛样式里面的值 并不能取得 外链css里面的值
//             console.log('yinyang.style.top')
//             console.log(yinyang.style.top)

//             var top = parseInt(yinyang.style.top) || 0
//             var left = parseInt(yinyang.style.left) || 0
//             // 防止div跑出页面 下面是 防止往左和防止放上 那么如果往右和往下呢？
//             var resultY = top + deltaY
//             var resultX = left + deltaX
//             // if(resultY < 0){
//             //     resultY = 0
//             // }
//             // if(resultX< 0){
//             //     resultX = 0
//             // }
//             yinyang.style.top = resultY + 'px'
//             yinyang.style.left = resultX + 'px'
//             // 然后发现数值很离谱 那是因为我们应该是每次移动和上次的位置对比
//             position[0] = e.clientX
//             position[1] = e.clientY
//         }
//     }
// }
//     // 鼠标松开
//     document.onmouseup = function(){
//         dragging = false
//     }
// }