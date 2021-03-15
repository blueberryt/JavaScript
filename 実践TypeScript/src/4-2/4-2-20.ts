function increment() {
  return { type: "INCREMENT"}
}

function decrement() {
  return { type: "DECREMENT" } as const
}

const x20 = increment()
const y20 = decrement() // 型は DECREMENT になる
