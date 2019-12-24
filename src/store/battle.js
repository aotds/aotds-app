import Updux from 'updux';
import u from 'updeep';

import fp from 'lodash/fp';

import { composeWithDevTools } from 'redux-devtools-extension';

const uu = gen => state => u(gen(state),state);

const update_selected_bogey = state => {
    return u.updateIn( 'battle.bogeys',
        u.map(
            uu( ({id}) => ({ selected: id === state.selected_bogey_id }) )
        )
    )(state);
}

const updux = new Updux({
  composeEnhancers: composeWithDevTools,
  initial: {
    selected_bogey_id: null
  },
  mutations: {
    fetch_battle_success: battle =>
      fp.flow([
          u({ battle: u.constant(battle) }),
          update_selected_bogey
      ]) ,
    select_bogey: bogey_id => fp.flow(
        [ u({ selected_bogey_id: bogey_id }),
            update_selected_bogey ]
    )
  },
  effects: {
    fetch_battle: ({ dispatch }) => next => async action => {
      next(action);
      fetch(`/api/battle/${action.payload}`)
        .then(doc => doc.json())
        .then(game => {
          dispatch.fetch_battle_success(game);
        });
    }
  }
});

export default updux;
export const createStore = updux.createStore;
