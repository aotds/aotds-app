import React from 'react';
import Firecon from "./Firecon";


export default function Firecons({ bogey_id, firecons, weapons, targets = [] }) {
const weapons_for = (id) => weapons.filter(({ firecon_id }) => firecon_id === id);

    return <fieldset>
        <legend>firecons</legend>

        { firecons.map( f => <Firecon key={f.id}
            firecon_id={f.id}
            weapons={weapons_for(f.id)}
            targets={targets}
            target_id={f.target_id} />
        )
        }

        <Firecon weapons={weapons_for(undefined)} />

    </fieldset>
}

/*
<template>
  <fieldset>

    <Firecon
      :bogey_id="bogey_id"
      v-for="firecon in firecons"
      :firecon_id="firecon.id"
      :key="firecon.id"
      :weapons="weapons_for(firecon.id)"
      :targets="targets"
      :target_id="firecon.target_id"
    />

    <Firecon :bogey_id="bogey_id" :weapons="weapons_for()" />
  </fieldset>
</template>


*/
