   function parabola(ele, stop){
    return new Promise((res)=>{
          // console.log(ele)
        // y == a*x^2 + bx + c
    setTimeout(function(){
      animationMouse(ele);
       var centerpoint = {
            x : ele.offsetLeft,
            y : ele.offsetTop
        }
        //停止点的 相对坐标系位置
        var target = {
            x : stop.offsetLeft - centerpoint.x,
            y : centerpoint.y - stop.offsetTop
        }
        //系数
        var a = -0.0029;//负数开口向下，正数开口向上
        // b = (y - ax^2)/x
        b = (target.y - a*target.x*target.x)/target.x;
        
        var _x = 0;
        // console.log(target.x)//停止点的左边
        if(stop.offsetLeft-centerpoint.x >= 0){
          var t = setInterval(function(){
            _x+=8;//如果是去右边就是+=8 >=
            var _y = a*_x*_x + b*_x;
            ele.style.left = _x + centerpoint.x + "px";//向右边
            // console.log(ele.style.left)
            ele.style.top = centerpoint.y - _y + "px";
            if(_x >= target.x) {
                ele.style.left = stop.offsetLeft + "px";
                ele.style.top = stop.offsetTop + "px";
                clearInterval(t)
                res("ok")
            }
        }, 30);
        }else{//如果去左边就是-=8<=
          var t = setInterval(function(){
            _x-=8;// 如果去左边就是-=8<=
            var _y = a*_x*_x + b*_x;
            ele.style.left = _x + centerpoint.x + "px";//向左边
            // console.log(ele.style.left)
            ele.style.top = centerpoint.y - _y + "px";
            
            if(_x <= target.x) {
                ele.style.left = stop.offsetLeft + "px";
                ele.style.top = stop.offsetTop + "px";
                clearInterval(t)
                res("ok")
            }
          }, 30);    
        }
        },1000)
    })
}

function animationMouse(ele){
  var animationMouse = document.querySelectorAll(".animationMouse");
     animationMouse.forEach((item)=>{
        item.innerHTML = ""
     })
   ele.innerHTML = "<img src='image/mouse@2x.png'></img>"
}
    // ele.onclick=()=>{
    //   parabola(ele, stop)
    // }