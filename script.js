let text_area = document.querySelector('#textarea')
let word_span = document.querySelector('#word-counter')
let chars_span = document.querySelector('#chars-counter')


// FUNCTION TO ADD VALUES IN DOM
const addIt = (chars = 00 , words = 00) => {
  
  // ADDING HOW MANY CHARACTERS IN PARAGRAPH TO DOM
  chars_span.innerHTML = words
  
  // ADDING HOW MANY WORDS IN PARAGRAPH IN DOM
  word_span.innerHTML = chars 
  
}


const counteWord = (e) =>  {
  
  
  // CHARS VARIABLE FOR COUNT OF CHARACTERS
  let chars;
  
  
  // WORD VARIABLE TO STORE THE WORDS 
  let word;
  
  
  //EXTRACTING EMPTY SPACES OF NULL VALUES AND STORING 
  let str_Arr = e.split(" ").filter(elm => {
    return elm !== "" 
  })
  
  
  // STORING EACH WORD WHO HAS MORE THAN ONE 1 CHARACTER:
  word = str_Arr.filter(elm => {
   return elm.length >= 2
  })
  
  
  // JOINING THE ARRAY TO FIND HOW MANY CHARACTERS IN IT
  chars = str_Arr.join("").length
  
  // CALLING (addIt) FUNCTION TO ADD THE VALUES IN DOM
  addIt(word.length,chars)
  
  
}




// Adding Event Listner To Text Area
text_area.addEventListener('input',(e) => {
  
  // Calling a function with parameter 
  // Of The Input Valus (STRING)
  counteWord(e.target.value)
  
})