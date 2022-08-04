import * as React from 'react';
import { Request, Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { readFileSync } from 'fs';
import { Provider } from 'react-redux';
import { GAMESTATUS } from '../../types/enums';
import gameReducer from '../../_store/reducers/game.reducer';
import authReducer from '../../_store/reducers/auth.reducer';
import leaderboardReducer from '../../_store/reducers/leaderboard.reducer';
import { combineReducers, createStore } from 'redux';
import { resolve } from 'path';

import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

function createEmotionCache() {
  return createCache({ key: 'css' });
}


if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  delete require.cache[require('../../assets/ssr.bundle.js')];
}

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const App = require('../../assets/ssr.bundle.js').default;

export const initialState: any = {
  id: null,
  user: null,
  isLoggedIn: false
};


export const gameState: any = {
  gameWord: null,
  gameLetters: [],
  errorCount: 0,
  showText: [],
  gameStatus: GAMESTATUS.inGame,
  submitted: false,
};

export const leaderBoardState: any = { rating: [], };

const state = {
  auth: initialState,
  game: gameState,
  leaderBoard: leaderBoardState,
};

const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  leaderBoard: leaderboardReducer,
});

const store = createStore(rootReducer, state);


export const render = (req: Request, res: Response) => {
  const script = '/assets/main.bundle.js';

  const cache = createEmotionCache();
  const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks
  } = createEmotionServer(cache);

  if (process.env.NODE_ENV === 'development') {
    // Оставил под реализацию оптимизации вебпак
    // const { devMiddleware } = res.locals.webpack;
    // const jsonWebpackStats = devMiddleware.stats.toJson();
    // const { assetsByChunkName } = jsonWebpackStats;
    // script = assetsByChunkName.main[0];
  }

  const indexHTML: any = readFileSync(resolve(__dirname, '../../../src/index.html'), { encoding: 'utf-8' });

  const location = req.url;


  const jsx = (
    <CacheProvider value={cache}>
      <CssBaseline/>
      <Provider store={store}>
        <StaticRouter location={location}>
          <App/>
        </StaticRouter>
      </Provider>
    </CacheProvider>
  );

  const reactHTML = ReactDOMServer.renderToString(jsx);
  const emotionChunks = extractCriticalToChunks(reactHTML);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  const state = store.getState();

  const result = indexHTML
    .replace('<div id="root"></div>', `
  <div id="root">${reactHTML}</div>
  <script type="module">window.__INITIAL_STATE__=${JSON.stringify(state)}</script>
  <script type="module" src="${script}"></script>`)
    .replace('<!-- ${css} -->', emotionCss);
  res.send(result);

};
