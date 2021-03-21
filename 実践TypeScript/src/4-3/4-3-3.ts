import { returnFalse } from '../3-6-1/3-6-1'

class Creature433 {
  breaathe(){}
}

class Animal433 extends Creature433 {
  shakeTail() {}
}

class Human433 extends Creature433 {
  greet() {}
}

function action433(creature: Animal433 | Human433 | Creature433) {
  const c0 = creature
  c0.breaathe()
  if (creature instanceof Animal433) {
    const c1 = creature
    return c1.shakeTail()
  }

  const c2 = creature
  if (creature instanceof Human433) {
    const c3 = creature
    return c3.greet()
  }

  const c4 = creature
  return c4.breaathe()
}
