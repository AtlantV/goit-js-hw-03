function slugify(title) {
    title = title.toLowerCase();
    const array = title.split("");
    const array2 = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === " ") {
            array2.push("-");   
        } else {
            array2.push(array[i]);
        }
    } 
    return array2.join("");
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
