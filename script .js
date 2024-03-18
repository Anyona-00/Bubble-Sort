 const numbers = [12,45,122,78,4,2,3,6,85,1,2,1,4,1,5,56,4,5,5,45,5,4]

 const sortArr =()=>{
    let swapped;
    let n = numbers.length;
    do{
        swapped = false;
        
for(let i = 0;i < n - 1; i++){
    if(numbers[i] > numbers[i + 1])
    {
        //Swap (milk water and an empty bowl)
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        swapped = true
    }
}
n--

 } while (swapped);
}

console.log(numbers)