type Answer = "mighty" | "lot" | "few" | "entirely"
type User2 = {
  name: string
  enquete: {
    [k: string]: Answer
  }
}

const userA2: User2 = {
  name: "Taro",
  enquete: {
    excercize_habits: "entirely",
    time_of_sleeping: "few"
  }
}
const x2 = userA2.enquete["exercise_habits"]
const y2 = userA2.enquete["steps_per_day"] // 存在しないのに推論されてる
