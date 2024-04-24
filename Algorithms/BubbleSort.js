
function BubbleSort(arr){
    let i,j, n = arr.length , sort = true ;
    for( i=0 ; i< n-1 ;i++)
    {
        for( j=0 ; j< n-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
               let num = arr[j];
               arr[j]  = arr[j+1];
               arr[j+1]= num;
               sort=false;
            }
        }
        if(sort===true){
            break;
        }
    }
    return arr;
}
arr=[1, 2, 3, 4, 5, 6, 7, 8];
console.log(BubbleSort(arr));
arr=[8 ,6,7, 4 , 5 , 1 , 3 , 2];
console.log(BubbleSort(arr));



