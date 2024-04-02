function divideAndConquerSum(a){
    if (a.length <= 3){
        let sum = 0;
        for(let i = 0; i < a.length; i++){
            sum += a[i];
        }
        return sum;
    } else {
        let ind1 = Math.floor(a.length/3);
        let ind2 = (2*(ind1));
        let ind3 = (3*(ind1));
        while(ind3 != a.length){
            ind1++;
            ind2++;
            ind3++;
        }
        return divideAndConquerSum(a.slice(0,ind1)) + 
        divideAndConquerSum(a.slice(ind1,ind2)) + 
        divideAndConquerSum(a.slice(ind2,ind3));
    }
}