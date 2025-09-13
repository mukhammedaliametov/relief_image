const str = 'How are you doing today';

// ========= 1 ===========
let result = "";

for (let i = str.length -1; i >= 0; i--) {
    result += str[i];
}

console.log(result);

// ========= 2 ===========
console.log(str.split(' ').join(','));
console.log(str.split('').join(','));

// ========= 3 ===========
console.log(str.split(' ').length);

// ========= 4 ===========
let str5 = 'salom dunyo'
const result2 = str5
  .split(" ") 
  .map(word => word[0].toUpperCase() + word.slice(1)) 
  .join(" ");
console.log(result2);

// ========= 5 ===========
const str2 = 'a b c d'
console.log(str2.split(' ').join(''));

// ========= 6 ===========
const str3 = 'Khasan teacher came back'
console.log(str3.split('a').join('o'));

// ========= 7 ===========
console.log(str3.slice(15, 20));

// ========= 8 ===========
const str4 = 'abc123d4';

let onlyNums = str4.replace(/[a-zA-Z]/g, ''); 
console.log(`${str4} -> ${onlyNums}`); 

// ========= 9 ===========
const vowels = 'aeiou';
const arr = str3.split('')
const onlyVowels = arr.filter(ch => vowels.includes(ch.toLowerCase()));
console.log(onlyVowels.length + 'ta unli harf mavjud');

// ========= 10 ===========
const reverseWord = str3.split(' ').reverse().join(' ');
console.log(reverseWord);
