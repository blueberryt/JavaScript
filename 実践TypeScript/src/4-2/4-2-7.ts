type User1 = {
  name: string
  [k: string]: number | string
}
const userA: User1 = {
  name: "Taro",
  age: 26
}
const x = userA.name
const y = userA.age
