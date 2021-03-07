type State = {
  id: number
  name: string
}

const state: Readonly<State> = {
  id: 1,
  name: "taro"
}

// state.name = "Hanako" エラる
// state.id = 2 エラる
