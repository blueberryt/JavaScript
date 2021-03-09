type User1 = {
  name: string
  [k: string]: any
}
const userA: User1 = {
  name: "Taro",
  age: 26
}
const x = userA.name
const y = userA.age
