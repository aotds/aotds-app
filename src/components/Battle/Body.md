```vue
<template>
<div style="width: 1200px; overflow: scroll;">
    <BattleBody :bogeys="bogeys" />
</div>
</template>
<script>
import BattleState from './BattleState';

const bogeys = [ 
    { id: 'enkidu', navigation: { coords: [0, 0], heading: 0, } },
    { id: 'siduri', navigation: { coords: [25, -20], heading: 2, } }
];

export default {
    data() { return {bogeys} },
    models: { Battle: BattleState },
    created() {
        this.Battle.bogeys = this.bogeys;
    }
}

</script>

```
