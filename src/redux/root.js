import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';

import vote_result_Reducer from './poll-redux/poll-redux.reducer';
import createpublicPOLLreducer from './create-poll-redux/create-poll-redux.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['votepoll','user','createPoll']
};

const rootReducer = combineReducers(
  {votepoll: vote_result_Reducer,
    user: userReducer,
    createPoll: createpublicPOLLreducer

}

  );

export default persistReducer(persistConfig, rootReducer);
