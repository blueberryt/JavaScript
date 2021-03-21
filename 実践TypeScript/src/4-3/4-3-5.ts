type UserA435 = { gender: "male"; name: string }
type UserB435 = { gender: "female"; age: number }
type UserC435 = { gender: "non-binary"; graduate: string }

function judgeUserType435(user: UserA435 | UserB435 | UserC435) {
  switch (user.gender) {
    case "male":
      const u0 = user
      return "user type is UserA435"
    case "female":
      const u1 = user
      return "user type is UserB435"
    case "non-binary":
      const u2 = user
      return "user type is UserC435"
    default:
      const u3 = user
      return "user type is never"
  }
}
