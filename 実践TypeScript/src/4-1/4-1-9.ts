function getFormattedValue2(value: number, unit = "pt") {
  return `${value.toFixed(1)} ${unit.toUpperCase()}`
}

console.log(getFormattedValue2(100))
console.log(getFormattedValue2(100, "kg"))
// console.log(getFormattedValue2(100, 0)) 初期値から型を推測しているので unit に string 以外の値が入るとエラーになる
