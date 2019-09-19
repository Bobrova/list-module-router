const getFromStorage = () => {
  const data = localStorage.getItem('list-module-3d');
  if (data) {
    return JSON.parse(data);
  }
  return false;
};

export const initialState = {
  list: getFromStorage() || [
    {
      id: 1,
      song: 'Brainstorm',
      singer: 'Arctic Monkeys',
    },
    {
      id: 2,
      song: 'The Golden Age',
      singer: 'The Asteroids Galaxy Tour',
    },
    {
      id: 3,
      song: 'Octopus',
      singer: 'The Barons Of Tang',
    },
    {
      id: 4,
      song: 'It is bigger on the inside',
      singer: 'Voltaire',
    },
    {
      id: 5,
      song: 'The Greatest Show Unearthed',
      singer: 'Creature Feature',
    },
    {
      id: 6,
      song: 'Perfect World',
      singer: 'Billy Talent',
    },
  ],
  form: {
    song: '',
    singer: '',
  },
  search: '',
  edit: {
    idEdit: 0,
    songEdit: '',
    singerEdit: '',
  },
};
