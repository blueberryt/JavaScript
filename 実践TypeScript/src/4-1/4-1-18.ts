type State = {
  id: number
  name: string
}

const state: State = {
  id: 1,
  name: "taro"
}

const frozenState = Object.freeze(state)
// frozenState.name = "Hanako" エラる
// frozenState.id = 2 エラる
