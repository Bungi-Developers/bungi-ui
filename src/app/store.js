import {createStore, compose/* , applyMiddleware*/} from 'redux';
import reducers from './reducers';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

export default () => createStore(reducers, {}, enhancerList);