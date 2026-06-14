//ARRAY

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//Shallow copy -> A shallow copy of an object is a copy whose properties share the the same references as the sources object from which the copy was made.
//Deep copy -> a deep copy of n object is a copy whose properties do not share the same references as those of the source object from the copy was made.

//ARRAY methods
//myArr.push(6)
//myArr.push(7)
//myArr.pop()
//pop means last value remove

//myArr.unshift(9)
//unshift means 9 included in first
//shift means remove 9
//myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log( newArr );

console.log(myArr);

//Slice , Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//range not included

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);

//range included
console.log(myn2);

