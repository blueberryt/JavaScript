type User436 = { gender: string;[k: string]: any }
type UserA436 = User436 & { name: string }
type UserB436 = User436 & { age: number }

function isUserA(user: UserA436 | UserB436): user is UserA436 {
  return user.name !== undefined
}
function isUserB(user: UserA436 | UserB436): user is UserB436 {
  return user.age !== undefined
}

function getUserType437(user: any) {
  const u0 = user
  if (isUserA(user)) {
    const u1 = user
    return "A"
  }

  if (isUserB(user)) {
    const u2 = user
    return "B"
  }

  return "unknown"
}

const x436 = getUserType437({ name: "Taro" })
