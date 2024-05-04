function countvowels(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var vowelscount = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (vowels.includes(char))
            vowelscount++;
    }
    return "the number of vowels in the given string is ".concat(vowelscount, ".");
}
console.log(countvowels("this is a string to check for vowels."));
