export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Выберите другого игрока!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.map((type) => this.members.add(type.type));
  }

  toArray() {
    const array = [...this.members];
    return array;
  }
}
