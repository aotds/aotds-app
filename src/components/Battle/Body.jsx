import React, { useState } from 'react';

import BattleMapPanZoom from "./BattleMapPanZoom";
import CommandPanel from "./CommandPanel";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useDispatch } from 'react-redux';
import battle_store from '../../store/battle';

import './styles.css';

const TabPanel = ({show, children}) => {
    return show && children;
};


export default function Body({ bogeys = [] }) {
    const [ tab_index, set_tab_index ] = useState('bogeys');
    const dispatch = useDispatch();

    console.log(tab_index);

    const selected_bogey = bogeys.find( ({selected}) => selected );

    const select_bogey = (bogey_id) => event => {
        event.preventDefault();
        dispatch( battle_store.actions.select_bogey(bogey_id) );
    }

  return <div className="BattleBody">
        <div className="battlemap" >
      <BattleMapPanZoom bogeys={ bogeys } />
        </div>
        <div className="sidepanels">
        <Tabs value={tab_index} onChange={ (event,newValue) => set_tab_index(newValue) }>
            <Tab label="Bogeys" value="bogeys"/>
            <Tab label="Command" value="command" disabled={!selected_bogey} />
        </Tabs>

        <TabPanel show={tab_index === "command"}>
            <CommandPanel bogeys={bogeys}
                bogey={selected_bogey}/>
        </TabPanel>

        <TabPanel show={tab_index === "bogeys"}>
          <ul>
        { bogeys.map( bogey => <li key={bogey.id}>
                <a href="#" onClick={select_bogey(bogey.id)}>
                    { bogey.name || bogey.id }
            </a>
            </li>
        )}
    </ul>
        </TabPanel>
        </div>
    </div>
}

/**
<template>
  <div class="battle_body">
    <div class="battlemap">
      <BattleMapPanZoom :bogeys="bogeys" />
    </div>
    <div class="sidepanels">
      <v-tabs>
        <v-tab href="#bogeys-panel">Bogeys</v-tab>
        <v-tab href="#command-panel" :disabled="!selected_bogey">Command</v-tab>


        <v-tab-item value="command-panel" v-if="selected_bogey">
          <CommandPanel :bogey="selected_bogey" :bogeys="bogeys" />
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import { useBattle } from '@/hooks/battle';

export default {
  name: "BattleBody",
  props: { bogeys: { default: () => [] } },
  injectModels: ["Battle"],
  components: { BattleMapPanZoom, CommandPanel },
  filters: {},
    setup() {
        const { select_bogey, selected_bogey } = useBattle();

        return {
            select_bogey,
            selected_bogey
        }
    }
};
</script>

<style scoped>
</style>
*/
