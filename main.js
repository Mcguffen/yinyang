console.log("hi")
var div1 = document.getElementById("yinyang")


 console.log(div1)
// 设置个开关 来判断什么时候可以拖拽什么时候停下。
var dragging = false

var lastX
var lastY
// 鼠标点下不松
div1.onmousedown = function(e){
    lastX = e.clientX
    lastY = e.clientY
    // console.log("原始位置"+e.clientX,e.clientY)
    dragging = true
}

document.onmousemove = function(e){
    // console.log(e.clientX, e.clientY)
    if(dragging === true){
        console.log(lastX,lastY)
        console.log(e.clientX, e.clientY)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
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
        lastX = e.clientX
        lastY = e.clientY
    }
}
// 鼠标松开
document.onmouseup = function(){
    dragging = false
}
