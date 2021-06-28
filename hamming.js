//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  export const compute = (stringA, stringB) => {
  let distance = 0;
  if(stringA === '' && stringB.length>0){
    throw 'left strand must not be empty'
  }else if(stringB === '' && stringA.length>0){
    throw 'right strand must not be empty'
  }else if (stringA.length !== stringB.length){
    throw 'left and right strands must be of equal length'
  }else if(stringA.length === stringB.length){
    if (check(stringA) && check(stringB)){
        for(let letter = 0; letter<stringA.length; letter++){
            if(stringA[letter].toUpperCase()!== stringB[letter].toUpperCase()){
                distance++
            }
        }
       return distance;
    } else{
      throw ` to find the hamming distance between two DNA strings use only DNA letters (eg: C, A, G, T)`
     }
}
};

// Check if the strings in the compute function will contain DNA letters
const check = (string) =>{
  const dnaLetters = [`C`,`T`,`A`,`G` ];
  let validation = 0;
  for (let l=0; l<string.length; l++){
      for (let d=0; d<dnaLetters.length; d++){
          if(string[l].toUpperCase() === dnaLetters[d]){
             validation++
          }
      }
  }
  if (validation === string.length){
      return true
  }

};












