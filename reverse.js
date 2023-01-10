function reverse(str){

    let rev =""
    for(let i=(str.length)-1 ; i>=0 ; i--){
        var char =str[i]
        rev =rev + char
    }
    return(rev)
}
const sentence ="my name is sunan"
console.log(reverse(sentence))

