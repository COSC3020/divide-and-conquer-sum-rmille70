
function divideAndConquerSum(a){
    if (a.length <= 3){
        let sum = 0;
        for(let i = 0; i < a.length; i++){
            sum += a[i];
        }
        return sum;
    } if (a.length % 3 == 0){
        return divideAndConquerSum(a.slice(0,(a.length/3))) + 
        divideAndConquerSum(a.slice((a.length/3), (2*(a.length/3)))) + 
        divideAndConquerSum(a.slice((2*(a.length/3)),(3*(a.length/3))));
    } else if (a.length % 3 == 1) {
        return divideAndConquerSum(a.slice(0,((a.length-1)/3))) + 
        divideAndConquerSum(a.slice(((a.length-1)/3), (2*(a.length-1)/3))) + 
        divideAndConquerSum(a.slice((2*(a.length-1)/3),((3*(a.length-1)/3)+1)));
    } else {
        return divideAndConquerSum(a.slice(0,((a.length-2)/3))) + 
        divideAndConquerSum(a.slice(((a.length-2)/3), (2*((a.length-2)/3)+1))) + 
        divideAndConquerSum(a.slice((2*(a.length-2)/3)+1),((3*(a.length-2)/3)+2));
    }
}