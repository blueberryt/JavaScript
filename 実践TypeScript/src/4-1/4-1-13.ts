type User = {
  age?: number,
  name?: string,
}

const notUser = {
  gender: "male",
  graduate: "Tokyo"
}

const maybeUser = {
  age: 26,
  name: "taro",
  gender: "male"
}
function registerUser(user: User) { }
// registerUser(notUser) エラーになる。これはわかる。


registerUser(maybeUser)
// 同じ内容だけど直接値を渡すとエラーになる。初見殺し。
// registerUser(
//   {
//     age: 26,
//     name: "taro",
//     gender: "male"
//   }

// ... っていうオブジェクトスプレッドというのを使うと変数を使うときと同じでエラーにならない。なんだと。。。
registerUser(
  {
    ...
    {
      age: 26,
      name: "taro",
      gender: "male"
    }
  }
)
