var c_delay = 0;

function bar_update(cont,height,color)
{ 
    
    window.setTimeout(function(){
        cont.style = "float:left; width:"+Math.floor(700/arr_len)+"px; height:"+height+"px; background-color:"+color+";  margin:0 1px"   
    },c_delay+=10);
}