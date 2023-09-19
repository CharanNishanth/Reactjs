import { booksReducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import rootSaga from './bookssaga';

const sagaMiddleware  = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const rootReducer = combineReducers({
    book:booksReducer,
})

const store = createStore(rootReducer,applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);

export default store;