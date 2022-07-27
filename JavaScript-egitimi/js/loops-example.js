
function vowelsAndConsonants(s) {
    let word = 'javascript'
    
    let wordArray= word.split("")
    let vowels = ['a','e','i','o','u']
    let newArray = []
    let newArray2 = []
    
  
    for (let i = 0; i < wordArray.length; i++){
        for (let j = 0; j <= vowels.length; j++) {

            if (wordArray[i] == vowels[j] ) {
               
                newArray[i] =wordArray[i]
             }  
         }
    }
  
 
//boşlukları siliyor
   
    function removeWhiteSpaceFromArray(array){
        return array.filter((item) => item != ' ');
    }
    
    function removeWhiteValueFromArray(array){
        return array.filter((item) => item != ',');
    }
    
    newArray =removeWhiteSpaceFromArray(newArray)
   
  
   // wordArray ın içindeki elemanlarının newArrayden farklı olan elemanları için kullanılıyor
   wordArray = wordArray.filter(val => !newArray.includes(val));

    newArray2 = newArray + wordArray
    newArray2= Array.from(newArray2)
    newArray2 = removeWhiteValueFromArray(newArray2)

    
    for(let i=0; i<newArray2.length; i++)
     console.log(newArray2[i])
    
    
    
}

vowelsAndConsonants()