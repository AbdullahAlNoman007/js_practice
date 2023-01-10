function fibo(n){
    let star =[0,1]
    for(let i =2; i<=n ; i++){
       star[i]=star[i-1]+star[i-2] 
     }
    return(star)  
}
const n= 15
const fibo_function = fibo(n)
console.log(fibo_function)