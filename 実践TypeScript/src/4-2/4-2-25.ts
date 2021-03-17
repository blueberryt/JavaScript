function greet25(name?: string) {
  console.log(`Hello ${name!.toUpperCase()}`) // コンパイルエラーにならずランタイムエラーになっちゃう
}

greet25()
