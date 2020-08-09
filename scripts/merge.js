function merge_driver(){
    c_delay = 0;
    merge_partition(0, arr_len-1)
}

function merge_partition(start, end){
    if(start<end){
        let mid = Math.floor((start+end)/2)
        bar_update(unsorted_array[mid],unsorted_array_size[mid],"yellow")
        merge_partition(start, mid)
        merge_partition(mid+1, end)
        merge_sort(start,mid,end)
    }

}

function merge_sort(start, mid, end){
    console.log(start, end, mid)
    var arr = []
    var k = 0
    var p = start
    var q = mid+1

    for(var i = start; i<=end; i++){
        if(p>mid){
            arr[k++] = unsorted_array_size[q++];
            bar_update(unsorted_array[q-1],unsorted_array_size[q-1],"red")
        }
        else if(q>end){
            arr[k++] = unsorted_array_size[p++]
            bar_update(unsorted_array[p-1],unsorted_array_size[p-1],"red")
        }
        else if(unsorted_array_size[p]<unsorted_array_size[q]){
            arr[k++] = unsorted_array_size[p++]
            bar_update(unsorted_array[p-1],unsorted_array_size[p-1],"red")
        }
        else{
            arr[k++] = unsorted_array_size[q++]
            bar_update(unsorted_array[q-1],unsorted_array_size[q-1],"red")
        }
    }

    for(var t=0;t<k;t++){
        unsorted_array_size[start++] = arr[t]
        bar_update(unsorted_array[start-1],unsorted_array_size[start-1],"green")
    }
}