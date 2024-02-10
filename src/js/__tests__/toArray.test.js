import Team from '../app';

test('Should be array', () => {
  const team = new Team();
  team.add('Wolf');
  team.add('Rabbit');
  const result = team.toArray();
  const expected = ['Wolf', 'Rabbit'];
  expect(result).toEqual(expected);
});
