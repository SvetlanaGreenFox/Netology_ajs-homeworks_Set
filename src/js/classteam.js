export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    const { type } = character;
    if (this.members.has(type)) {
      throw new Error('Выберите другого игрока!');
    }
    this.members.add(type);
  }

  addAll(...characters) {
    for (const { type } of characters) {
      this.members.add(type);
    }
  }

  toArray() {
    const array = [...this.members];
    return array;
  }
}
