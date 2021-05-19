//import { createStore, applyMiddleware, compose } from 'redux';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import { forbiddenWordsMiddleware } from "../components/Components/task14/middleware/index";

//const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer,
//     storeEnhancers(applyMiddleware(forbiddenWordsMiddleware)));

const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware)
);

export default store;


//-----------------------------------------------------------------
// import { createStore } from 'redux';
// import reducers from './reducers/reducers';

// const store = createStore(reducers);

// export default store;

// store.subscribe(() => console.info(store.getState()));
// store.subscribe(() => console.log('Look, Redux!!'));
