console.log("hi")
var div1 = document.getElementById("yinyang")


 console.log(div1)
// 设置个开关 来判断什么时候可以拖拽什么时候停下。
var dragging: boolean = false

// 记录鼠标位置
var position = [0, 0]
// div1 不为空执行下面
if(div1){
// 鼠标点下不松
div1.onmousedown = function(e){

    dragging = true
        // 鼠标按下的时候记录鼠标位置
    position = [e.clientX,e.clientY]
}

document.onmousemove = function(e){
        // console.log(e.clientX, e.clientY)
        if(dragging === true){
            // console.log(e.clientX, e.clientY)
            var deltaX = e.clientX - position[0]
            var deltaY = e.clientY - position[1]
            if(div1){
            // 由于js有bug div.style.top只有取得内敛样式里面的值 并不能取得 外链css里面的值
            console.log('div1.style.top')
            console.log(div1.style.top)

            var top = parseInt(div1.style.top) || 0
            var left = parseInt(div1.style.left) || 0
            // 防止div跑出页面 下面是 防止往左和防止放上 那么如果往右和往下呢？
            var resultY = top + deltaY
            var resultX = left + deltaX
            if(resultY < 0){
                resultY = 0
            }
            if(resultX< 0){
                resultX = 0
            }
            div1.style.top = resultY + 'px'
            div1.style.left = resultX + 'px'
            // 然后发现数值很离谱 那是因为我们应该是每次移动和上次的位置对比
            position[0] = e.clientX
            position[1] = e.clientY
        }
    }
}
    // 鼠标松开
    document.onmouseup = function(){
        dragging = false
    }
}