import {authReducer} from './auth';
import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/auth';


describe('authReducer', () => {
    // Set up some dummy data
    let clearAuthState;   
    let clearAuthAction;
    let initialState;
    let authRequestState;
    let authRequestAction;
    let authRequestResult;
    let authAuthenticated;
    let setAuthTokenState;
    let setAuthTokenAction; 
    let setAuthTokenResult; 
    let authErrorAction;
    let authErrorResult;
    let authSuccessAction;
    let authSuccesResult;
    beforeAll(() => {

    clearAuthState = {
        authToken: "authtoken",
        currentUser: {username: "bsanders", firstName: "beebee", lastName: "sanders"},
        error: null,
        loading: false
    }
    clearAuthAction = {
        type: CLEAR_AUTH 
    }

    authRequestState = {
        authToken: "authtoken",
        currentUser: null,
        error: null,
        loading: false
    }
    authRequestAction = { 
        type: AUTH_REQUEST
    }
    authRequestResult = {
        authToken: "authtoken", 
        currentUser: null, 
        error: null, 
        loading: true}

    setAuthTokenState = {
        authToken: "authtoken",
        currentUser: null,
        error: null,
        loading: true}
    setAuthTokenAction = {
        authToken: "authtoken",
        type: SET_AUTH_TOKEN
    }
    setAuthTokenResult = {
        authToken: "authtoken",
        currentUser: null, 
        error: null, 
        loading: true
    }

    authAuthenticated = { 
        authToken: "authtoken",
        currentUser: null, 
        loading: true, 
        error: null
    }
    authSuccessAction = { 
        currentUser: {username: "bsanders", firstName: "beebee", lastName: "sanders"},
        type: AUTH_SUCCESS
    }
    authSuccesResult = {
        authToken: "authtoken", 
        currentUser: {
            firstName: "beebee", 
            lastName: "sanders", 
            username: "bsanders"}, 
        error: null, 
        loading: false}

    authErrorAction = {
        type: AUTH_ERROR 
    }
    authErrorResult =  {
        authToken: null, 
        currentUser: null, 
        error: undefined, 
        loading: false
    }

    initialState = {
        authToken: null, 
        currentUser: null,
        loading: false,
        error: null
    };    
})    
    
    it('Should set the initial state when nothing is passed in', () => {
        let state = authReducer(undefined,  {type: '__UNKNOWN'});         
        expect(state).toEqual(initialState) ;   
    });

    it('Should set the state for action CLEAR_AUTH', () => {
        let state = authReducer(clearAuthState,  clearAuthAction);         
        expect(state).toEqual(initialState) ;   
    });

    it('Should set the state for action SET_AUTH_TOKEN', () => {
        let state = authReducer(setAuthTokenState,  setAuthTokenAction);         
        expect(state).toEqual(setAuthTokenResult) ;   
    });

    it('Should set the state for action AUTH_REQUEST', () => {
        let state = authReducer(authRequestState,  authRequestAction);         
        expect(state).toEqual(authRequestResult) ;   
    });    

    it('Should set the state for action AUTH_SUCCESS', () => {
        let state = authReducer(authAuthenticated,  authSuccessAction);         
        expect(state).toEqual(authSuccesResult) ;   
    });
    
    it('Should set the state for action AUTH_ERROR', () => {
        let state = authReducer(initialState,  authErrorAction);         
        expect(state).toEqual(authErrorResult) ;   
    });           
})  
