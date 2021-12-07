// Business Logic
function indexOfFirstVowel (word) {
    const vowel = ["a","e","i","o","u"];
    const wordchar = word.split ("");
    let returnIndex = -1

    wordchar.forEach(function(element, Index){
        if(vowel.includes(element.toLowerCase()) && returnIndex === -1 ) {
            returnIndex = Index;
            return returnIndex;
        }
    });
    return returnIndex
};

// For vowel
function treatVowel (word) {
    let returnValue = "";
    if(indexOfFirstVowel(word) ===0) {
        returnValue = word + "way";
    }
    return returnValue;
}

// For consonant
function treatConsonant (word) {
    let returnValue ="";
if( word.trim().length ===0 && word ==="") {
}
let indexOf1stVowel = indexOfFirstVowel (word);
if(indexOf1stVowel !== 0) {
    if(indexOfFirstVowel === -1) {
        indexOf1stVowel =0;
    }
    if( indexOf1stVowel >=0) {
        let consonantSlice =word.slice(0 ,indexOf1stVowel)
        let secondSlice =word.slice(indexOf1stVowel , word.length);
        returnValue = secondSlice + consonantSlice + "ay";
        return returnValue;
    }
}
return returnValue;
}

// For QU
function treatQu (word) {
    let returnValue ="";
    if(word.toLowerCase().indexOf("qu") ===0) {
        returnValue =word.slice(2 , word.length);
        returnValue += "quay";
    }
    return returnValue;
}

// For piglatin word
function piglatinword(word) {
    let returnValue ="";
    if(treatQu(word)) {
        return treatQu (word);
    }
    else if(treatVowel(word)) {
        return returnValue = treatVowel(word);
    }
    else if(treatConsonant(word)) {
        return treatConsonant(word);
    }
    return returnValue;  
}
// For piglatin sentence
function pigLatin(sentence) {
    let newSentence ="";
    const words = sentence.split(" ");
    words.forEach(function(word) {
        newSentence += piglatinword (word) + " ";
    });
    return newSentence;
}
   