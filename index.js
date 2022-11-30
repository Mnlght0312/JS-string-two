//Task1 length

let str = `Enkhmanlai`
let str2 = `Enkhmanlai Otgonpurev`
console.log(str.length);
console.log(str2.length);
if (str2.length > str.length) {
    console.log(`Str 2 is longer than str 1`);
} else {
    console.log(`its not long enough`);
}
if (str.length == 10) {
    console.log(`legit`);
} else {
    console.log(`invalid`);
}

//Task2 lowercase

let word = `im gonna ride till i cant no more`
console.log(word.toLowerCase());

//Task3 uppercase

let upp = `Shine bright like a diamond`
console.log(upp.toUpperCase());

//Task4 concat

let pine = `Pinecone academy`
let cone = pine.concat(``, ` leap хөтөлбөрт тавтай морилго уу?`);
console.log(cone);

//Task5 firstName, LastName, country, city, age, job
 
let firstName = `MachineGun`
let LastName = `Yurt`
let country = `Somewhere in the middle`
let city = `Gotham`
let age = `21`
let job  = `Los Angeles Police Department`
let all = firstName.concat( `\n`, LastName, `\n`, country, `\n`,  city, `\n`, age, `\n`, job.toUpperCase())
console.log(all);

//Task6 Escape signs

let numb = `1 2 3 4 5`
console.log(numb);
console.log((numb.substr(2,7)).concat(` 1`));
console.log((numb.substr(3,6)).concat(` `, numb.substr(0,3)));
console.log((numb.substr(5,6)).concat(` `, numb.substr(0,5)));
console.log (`5 1 2 3 4`)




