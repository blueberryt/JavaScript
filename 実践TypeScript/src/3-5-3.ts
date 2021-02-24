function wait2(duration: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${duration}ms passed`), duration)
  })
}
wait2(1000).then(res => {})
