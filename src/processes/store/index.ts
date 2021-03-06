import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { coinReducer } from './reducers/coinReducer/coinReducer';
import { rootCoinSaga } from './sagas/coinSaga';
import { tickerReducer } from './reducers/tickerReducer/tickerReducer';
import { rootTickerSaga } from './sagas/tickerSaga';

const rootReducer = combineReducers({
	coins: coinReducer,
	tickers: tickerReducer
});

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootCoinSaga);
sagaMiddleware.run(rootTickerSaga);
