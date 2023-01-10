function word_reverse(str){
        const array = str.split(" ")
        const new_array =[]
        for( let i = array.length -1 ; i>=0 ;i--){
            const element = array[i]
            new_array.push(element)
        }
        const rev_word = new_array.join(' ')
        return(rev_word)
}
const word = "my name is sunan"
console.log(word_reverse(word))