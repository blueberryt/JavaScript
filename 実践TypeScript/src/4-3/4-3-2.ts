import { returnFalse } from '../3-6-1/3-6-1'

type User432 = { gender: string }
type UserA432 = User432 & { name: string }
type UserB432 = User432 & { age: number, graduate: string }

function judgeUserType(user: UserA432 | UserB432) {
  if ("gender" in user) {
    const u0 = user
    console.log("User type is UserA432 | UserB432")
  }

  if ("name" in user) {
    const u1 = user
    console.log("user type is UserA432")
    return
  }

  const u2 = user
  console.log("user type is UserB")
}
