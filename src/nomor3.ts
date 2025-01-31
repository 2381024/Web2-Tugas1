function camelcase(text: string): number {
    let wordCount = 1;
    
    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            wordCount++;
        }
    }
    return wordCount;
}
const inputString = "saveChangesInTheEditor";
console.log(camelcase(inputString));