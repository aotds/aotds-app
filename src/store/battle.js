import Updux from 'updux';
import u from 'updeep';

const updux = new Updux({
    initial: { },
    mutations: {
        fetch_battle(battle_id) {
            console.log("battle id!");
            return x => x;
        },
        fetch_battle_success: (battle) => u({ battle: u.constant(battle) }),
    },
    effects: {
        fetch_battle: ({dispatch}) => next => async (action) => {
            next(action);
    fetch(`/api/battle/${action.payload}`)
      .then(doc => doc.json())
          .then(game => {
              dispatch.fetch_battle_success(game);
          });
        },
    },
});

export default updux;
export const createStore = updux.createStore;
