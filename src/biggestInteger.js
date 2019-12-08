function solution(num){
    let sorted = num.sort()
    if(sorted.length == 1 && num[0] > 0){
        return num[0] + 1
    } else if (sorted.length > 1){
        for(var i=0;i<sorted.length;i++){
            if(sorted[i+1] - sorted[i] !== 1){
                return sorted[i] + 1
            }
        }
        
    }
    
}