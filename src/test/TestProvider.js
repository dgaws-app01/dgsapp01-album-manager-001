import { addApi, modifyStore, stores } from '../features/providers/masterProvider';

const { addPlayer, removePlayer } = modifyStore({
  master: {
    players: {
      initialState: { currentPlayerIdx: -1, players: [] },
      actions: {
        addPlayer: (p, s) => {
          s.players.push(p);
        },
        removePlayer: (p,s) => {
          s.players = []
        }
      },
    },
  },
});

const testProviderApis = addApi({
  getPlayers: {
    respH: (j) => {
      console.log(j);
      // return JSON.parse(j.req.postData.contents)
    },
  },
});



export const PlayersProvider = {
  get addPlayer(){return addPlayer}, 
  get removePlayer(){return removePlayer}, 
  get testProviderApis(){return testProviderApis},
  get players(){return stores.master.state?.players}
}