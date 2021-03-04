function greet(name?: string) {
  if (name == undefined) return "Hello" // Type Guard
  return `Hello ${name.toUpperCase()}`
}

console.log(greet())
console.log(greet("taro"))
