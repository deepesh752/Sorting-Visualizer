function bubble_sort(){
    c_delay = 0
    for(var i = 0;i<arr_len;i++)
    {
        for(var j = 0;j<arr_len-1-i;j++)
        {    
            bar_update(unsorted_array[j], unsorted_array_size[j],"red");
            if(unsorted_array_size[j]>unsorted_array_size[j+1])
            {
                bar_update(unsorted_array[j], unsorted_array_size[j],"red")
                bar_update(unsorted_array[j+1], unsorted_array_size[j+1],"red")
                
                let temp = unsorted_array_size[j];
                unsorted_array_size[j] =unsorted_array_size[j+1];
                unsorted_array_size[j+1] =temp;

                bar_update(unsorted_array[j], unsorted_array_size[j],"red")
                bar_update(unsorted_array[j+1], unsorted_array_size[j+1],"red")
            }
             bar_update(unsorted_array[j], unsorted_array_size[j],"black")
        }
         bar_update(unsorted_array[j], unsorted_array_size[j],"green")
    }
     bar_update(unsorted_array[0], unsorted_array_size[0],"green")
     console.log("Sorted")
}
