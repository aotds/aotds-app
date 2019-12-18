
```js
const weapons = [ {
    id: 1,
    class: 1,
    type: "beam",
    firecon_id: 1,
},{
    id: 2,
    class: 2,
    type: "beam",
}];

const targets = [ 
{ id: "siduri", name: "Siduri" },
{ id: "gilgamesh", name: "Gilgamesh" } 
];

const firecons = [ 
 { id: 1 },
 { id: 2 },
];

<Firecons
    bogey_id="siduri"
    :targets="targets"
    :firecons="firecons"
    :weapons="weapons"
/>

```

