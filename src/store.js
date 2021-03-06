import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {authReducer} from './reducers/auth';
import {blogsReducer} from './reducers/blogs';
import {toolsReducer} from './reducers/tools';
import {setAuthToken, refreshAuthToken} from './actions/auth';
 
const store = createStore(
    combineReducers({   
        form: formReducer,
        auth: authReducer,
        blogsReducer,
        toolsReducer    
    }),
    applyMiddleware(thunk)
);

// set the base url.  To be used to build full url for "Link"
// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());    
}

export default store;
