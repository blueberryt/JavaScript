function getFormattedValue3(value: number, unit: string | null = null) {
  const _value = value.toFixed(1)
  if (unit === null) return `${_value}`
  return `${_value} ${unit.toUpperCase()}`
}
