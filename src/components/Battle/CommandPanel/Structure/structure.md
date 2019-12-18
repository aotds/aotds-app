```js
const structure ={
        hull: { current: 3, rating: 16 },
        armor: { current: 3, rating: 6 },
        shields: [
            { id: 0, level: 1 },
            { id: 1, level: 2, damaged: true },
        ],
    };

<Structure :structure="structure"/>
```
