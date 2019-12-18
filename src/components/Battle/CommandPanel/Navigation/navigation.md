```jsx 
const drive = { current: 3, rating: 6 };

const orders = { thrust: 1, turn: 0, bank: 0, };

const navigation = {
        maneuvers: {
            thrust: [ -3, 3],
            turn: [-1,1],
            bank: [-1,1],
        },
        course: {
            maneuvers: {
                thrust: [ -2, 2],
                turn: [-1,1],
                bank: [-1,1],
            },
        },
    };

<Navigation
   :drive="drive"
   :orders="orders"
   :navigation="navigation"
/>
```
