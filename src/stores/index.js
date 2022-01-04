import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogger} from 'redux-logger';
import * as rootReducers from './reducers';
import rootSaga from './sagas';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

const config = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel1,
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
if (__DEV__) {
  middleware.push(createLogger());
}

const persistedReducer = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = {enhancers};
const store = createStore(persistedReducer, undefined, compose(...enhancers));
let persistor = persistStore(store, persistConfig);
const configureStore = () => {
  return {persistor, store};
};
sagaMiddleware.run(rootSaga);

export default configureStore;
