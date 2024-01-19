// Initializing word bank
wordList1 = ["You",'I','We']
wordList2 = ['wrote','saw','read']
wordList3 = ['Van Wilder',"Star Wars",'Harry Potter']

//function to piece together a message using word bank

const getMessage = () => {

    return wordList1[Math.floor(Math.random() * 3)] + ' ' + wordList2[Math.floor(Math.random() * 3)]  + ' ' + wordList3[Math.floor(Math.random() * 3)] 
}




console.log(getMessage())