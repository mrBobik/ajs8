import Team from '../app';

test('Should add all personages', () => {
  const team = new Team();
  const personages = ['Boomer', 'Lex', 'Tor'];
  team.addAll(personages);
  const expected = ['Boomer', 'Lex', 'Tor'];
  expect(team.toArray()).toEqual(expected);
});

test('Not should be doubling', () => {
  const team = new Team();
  const personages = ['Boomer', 'Lex', 'Boomer', 'Tor'];
  team.addAll(personages);
  const expected = ['Boomer', 'Lex', 'Tor'];
  expect(team.toArray()).toEqual(expected);
});
