function max (number){

    let max_num =0
    for(let i=0 ; i<number.length; i++){

        var element = number[i]
        if(element>max_num){

            max_num=element
        }
        
    }
    return(max_num)
   
   
}

const array=[33,421,56,761,54,32,1000]
console.log(max(array))
