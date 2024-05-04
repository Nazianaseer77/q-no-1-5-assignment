function countvowels(str: string){
    let vowels = ["a","e","i","o","u"];
    let vowelscount = 0;
    for(let i = 0; i < str.length; i++){
        const char =str[i];
        if(vowels.includes(char)) vowelscount++;

    }
    return `the number of vowels in the given string is ${vowelscount}.`;
}
console.log(countvowels("this is a string to check for vowels.")); //9