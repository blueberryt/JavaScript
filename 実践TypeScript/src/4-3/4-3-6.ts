type User436 = { gender: string; [k: string]: any }
type UserA436 = User436 & { name: string }
type UserB436 = User436 & { age: number }

function isUserA436(user: UserA436 | UserB436): user is UserA436{
  return user.name !== undefined
}

function isUserB436(user: UserA436 | UserB436): user is UserB436 {
  return user.age !== undefined
}
