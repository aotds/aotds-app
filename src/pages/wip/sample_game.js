  import { inflate_battle }
   from '@aotds/aotds-battle';

export default inflate_battle({
    game: {
      name: 'Epsilon 5',
    },
    bogeys: [
{
    drive: 8,
    navigation: {
        heading: 0,
        velocity: 3,
        coords: [ 0,0 ],
    },
    name: 'Enkidu',
    id: 'enkidu',
    structure: {
      hull: 8,
      armor: 10,
    },
    weaponry: {
      shields: [1,2,2],
    },
  },{
    drive: 8,
    navigation: {
        heading: 10,
        velocity: 3,
        coords: [ 10,10 ],
    },
    name: 'Siduri',
    id: 'siduri',
    structure: {
      hull: 8,
      armor: {
          rating: 10, current: 7,
      },
    },
    weaponry: {
      shields: [1,2,2],
    },
  }
    ]
  }
)
