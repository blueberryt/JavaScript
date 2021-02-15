class Creature263 {
  numberOfHands: number
  numberOfFeet: number
  constructor(numberOfHands: number, numberOfFeet: number) {
    this.numberOfHands = numberOfHands
    this.numberOfFeet = numberOfFeet
  }
}

class Human263 extends Creature263 {
  protected name: string
  constructor(name: string) {
    super(2, 2)
    this.name = name
  }
  protected greet() {
    return `Hello! I'm ${this.name}`
  }
  public shakeHands() {
    console.log(this.greet())
  }
}

class Taro extends Human263 {
  constructor() {
    super("Taro")
  }
  public greeting() {
    console.log(this.greet())
  }
}

const taro = new Taro()

taro.greeting()
// taro.greet()
taro.shakeHands()
