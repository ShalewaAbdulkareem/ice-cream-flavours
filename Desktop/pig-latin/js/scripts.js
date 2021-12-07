// Utility
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


   