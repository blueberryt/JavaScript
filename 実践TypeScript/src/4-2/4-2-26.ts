const myName = 0
// console.log(myName.toUpperCase()) コンパイルエラーになる

// double assertion 
const myName2 = 0 as any as string
console.log(myName2.toUpperCase()) // コンパイルエラーにならない
