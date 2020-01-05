import {createStore, compose} from 'redux';
import reducers from './reducers';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(...enhancerList);

export default () => createStore(reducers, {}, composedEnhancer);