const a = "a"
let b = a
// この場合型は string になる

const A = "A" as const
let B = A
// この場合型は "A" になる
