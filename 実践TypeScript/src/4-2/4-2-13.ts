type Question = "exercise_habits" | "time_of_sleeping"
type Answer13 = "mighty" | "lot" | "few" | "entirely"
type User13 = {
  name: string
  enquete: { [K in Question]?: Answer13 }
}

const userA13: User13 = {
  name: "Gentaro",
  enquete: {
    exercise_habits: "entirely",
    time_of_sleeping: "few"
  }
}

const x = userA13.enquete["exercise_habits"]
// const y = userA13.enquete["steps_per_day"] エラる
