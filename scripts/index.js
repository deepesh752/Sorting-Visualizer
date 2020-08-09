window.onload = () =>{
    array_init();
    
    // Event Listener
    document.getElementById("array-generate").addEventListener("click", array_init);
    document.getElementById("array-size").addEventListener("click", array_update);
    document.getElementById("bubble-button").addEventListener("click", bubble_sort);
    document.getElementById("merge-button").addEventListener("click", merge_driver);

}


var unsorted_array = []
var unsorted_array_size = []
// Get Elements
var canvas = document.getElementById('sorting-space');
var arr_len = 0

function array_init(){
    arr_len = document.getElementById('array-size').value
    canvas.innerHTML = ""
    unsorted_array = []
    unsorted_array_size = []
    console.log(arr_len);
    for (let i = 0;i<arr_len;i++){
        unsorted_array_size[i]=Math.floor(Math.random() * 350) + 20
        unsorted_array[i]=document.createElement("div");
        canvas.appendChild(unsorted_array[i]);
        unsorted_array[i].style = "float:left; width:"+Math.floor(700/arr_len)+"px; height:"+unsorted_array_size[i]+"px; background-color:black;  margin:0 1px"   
    }
    console.log(unsorted_array,unsorted_array_size)
}

function array_update(){
    array_init()
}
