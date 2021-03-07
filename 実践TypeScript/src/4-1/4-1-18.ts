type State = {
  readonly id: number
  name: string
}

const state: State = {
  id: 1,
  name: "taro"
}

state.name = "Hanako"
// state.id = 2 エラる…
