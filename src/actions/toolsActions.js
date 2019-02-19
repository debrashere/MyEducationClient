import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import * as types from '../contraints/toolsActionTypes';

export const toolsError = error => ({
    type: types.TOOLS_ERROR,
    error
});

export const fetchToolsSuccess = (tools) => ({
    type: types.FETCH_TOOLS_SUCCESS,
    tools
});

export const updateToolSuccess = (tool) => ({
    type: types.UPDATE_TOOL_SUCCESS,
    tool
});

export const fetchToolSuccess = (tool) => {
return ({  
    type: types.FETCH_TOOL_SUCCESS,
    tool: tool
});
}

export const createToolSuccess = (tool) => ({
    type: types.CREATE_TOOL_SUCCESS,
    tool
});

export const createTool = (userName, title, url, description, price, rating) =>  (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch({type: types.CREATE_TOOL});
    fetch(`${API_BASE_URL}/tools`, {
       method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({ title, url, description, price, rating})
    })      
       .then(response => response.json())      
       .then(tool => { 
           dispatch(createToolSuccess(tool));
       })
       .catch(err => {
           const {code} = err;
           const message =
               code === 401
                   ? 'Unable to create tool at this time'
                   : 'Failed to create tool, try again';
           dispatch(toolsError(message));
           throw new SubmissionError({             
            _error:  message
          }) 
       })
};

export const updateTool = ( id, title, url, description, price, rating) =>  (dispatch, getState) => {
    const authToken = getState().auth.authToken; 
    dispatch({type: types.UPDATE_TOOL});   
    return fetch(`${API_BASE_URL}/tools/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({ id, title, url, description, price, rating})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(tool => {    
            dispatch(updateToolSuccess(tool)) })        
        .catch(err => {
            const {reason, message} = err;
            dispatch(toolsError(message));
            if (reason === 'ValidationError') {
                throw new SubmissionError({             
                    _error:  message
                  }) 
            }
        });
};

export const fetchTools = () => (dispatch, getState) => {
    dispatch({type:types.FETCH_TOOLS});
    const authToken = getState().auth.authToken;
 
    return  (
         fetch(`${API_BASE_URL}/tools`, {
            method: 'GET',
            headers: {
                // Provide our auth token as credentials
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(response => response.json())
        .then(tools => { 
            dispatch(fetchToolsSuccess(tools)) })
        .catch(err => {
            const {code} = err;
            const message =
                code === 401
                    ? 'Your are not authorize.  Please log in.'
                    : 'Failed to fetch posts tool, try again';
            dispatch(toolsError(message));
            throw new SubmissionError({             
                _error:  message
              })         
        })
    )
 };

 export const fetchTool = (id) => (dispatch, getState) => {
     dispatch({type:types.FETCH_TOOL});
     const authToken = getState().auth.authToken;
     return  (
          fetch(`${API_BASE_URL}/tools/${id}`, {
             method: 'GET',
             headers: {
                 // Provide our auth token as credentials
                 Authorization: `Bearer ${authToken}`
             }           
         })
         .then(res => normalizeResponseErrors(res))
         .then(res => res.json())
         .then(tool => {                
             dispatch(fetchToolSuccess(tool));
             return Promise.resolve();                                 
         })         
         .catch(err => {
             const {code} = err;
             const message =
                 code === 401
                     ? 'Your are not authorize.  Please log in.'
                     : 'Failed to fetch posts tool, try again';
             dispatch(toolsError(message));
             return Promise.reject(
                 new SubmissionError({
                     _error: message
                 })
             );
         })
     )
  };
