```js
const weapons = [ {
    id: 1,
    class: 1,
    type: "beam",
},{
    id: 2,
    class: 2,
    type: "beam",
}];

const targets = [
{ id: "siduri", name: "Siduri" },
{ id: "gilgamesh", name: "Gilgamesh" }
];
const firecon_id = 1;

<Firecon
    :firecon_id="firecon_id" bogey_id="enkidu" :weapons="weapons"
    :targets="targets"
    />

```
