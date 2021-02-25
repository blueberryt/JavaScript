function getStringValue(value: number, prefix?: string): string {
   // if (prefix === undefined) return value  ※ string  って宣言で成約しているのでエラる
   return `${prefix} ${value}`
}
