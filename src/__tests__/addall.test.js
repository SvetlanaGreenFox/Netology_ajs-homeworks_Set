import Team from '../js/classteam';

test('Add Characters', () => {
  const Bowerman = {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const Magician = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const Swordsman = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const team = new Team();
  team.addAll(Bowerman, Magician, Swordsman);

  expect(team.toArray()).toEqual(['Bowerman', 'Magician', 'Swordsman']);
});

test('Add Characters', () => {
  const Bowerman = {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const Magician = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const Swordsman = {
    name: 'Swordsman',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const team = new Team();
  team.addAll(Bowerman, Magician, Swordsman);

  expect(team.toArray()).toEqual(['Bowerman', 'Magician']);
});
