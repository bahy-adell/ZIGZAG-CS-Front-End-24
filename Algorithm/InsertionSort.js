
function InsertionSort(arr){
    let num ,j,i;
    for(i=1; i<arr.length ;i++)                 
    {
        num = arr[i];                      
        j= i-1 ;                              
        while(j>= 0 && arr[j] > num )               
        {
            arr[j+1]=arr[j];                   
            j= j-1 ;                        
        }
        arr[j+1]= num ;                         
    }
    return arr;
}
arr=[8 ,6,7, 4 , 5 , 1 , 3 , 2];
console.log(InsertionSort(arr));

