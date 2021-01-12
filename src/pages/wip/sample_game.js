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
        coords: [ 10,10 ],
    },
    name: 'Siduri',
    id: 'siduri',
    structure: {
      hull: 8,
      armor: 10,
    },
    weaponry: {
      shields: [1,2,2],
    },
  }
    ]
  }
)
