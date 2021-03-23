type User438 = { name: string }
type UserA438 = User438 & { gender: "male" | "female" | "they" }
type UserB438 = User438 & { graduate: string }

const users: (UserA438 | UserB438)[] = [
  { name: "taro", gender: "they" },
  { name: "hanako", graduate: "Tokyo"}
]

const filteredUsers = users.filter(user => "graduate" in user)

function filterUser(user: UserA438 | UserB438): user is UserB438 {
  return "graduate" in user
}
