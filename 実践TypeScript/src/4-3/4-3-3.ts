class Creature433 {
  breathe(){}
}

class Animal433 extends Creature433 {
  shakeTail() {}
}

class Human433 extends Creature433 {
  greet() {}
}

function action(creature: Animal433 | Human433 | Creature433) {
  const c0 = creature
  c0.breathe()

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
  return c4.breathe()
}
