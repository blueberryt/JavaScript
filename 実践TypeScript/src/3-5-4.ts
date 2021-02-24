function wait3(duration: number) {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve(`${duration}ms passed`), duration)
  })
}
wait3(1000).then(res => {})
