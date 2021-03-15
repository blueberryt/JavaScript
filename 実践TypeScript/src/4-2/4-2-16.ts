interface User16 {
  [k: string]: () => Promise<any>
}

const user16: User16 = {
  // name: "Taro",
  // age: 28,
  // walk: () => { },
  talk: async () => {}
}
