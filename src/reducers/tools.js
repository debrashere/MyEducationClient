import * as types from '../contraints/toolsActionTypes';
const initialState = {
    id: null,
    tool: {},
    tools: [],
    loading: false,
    error: null
};

export const toolsReducer = (state = initialState, action) => {
    if (action.type === types.FETCH_TOOLS) {        
        return Object.assign({}, state, {      
            tools: [],
            loading: true,
            error: null
        });        
    }
    else if (action.type === types.FETCH_TOOLS_SUCCESS) {
        return Object.assign({}, state, {     
            tools: action.tools || [],
            loading: false,
            error: null
        });
    } 
    else if (action.type === types.FETCH_TOOL) {        
        return Object.assign({}, state, {
            id: action.id,
            tool: {},
            loading: true,
            error: null
        });   
    }            
    else if (action.type === types.FETCH_TOOL_SUCCESS) {      
        return Object.assign({}, state, {      
            tool: action.tool || {},
            loading: false,
            error: null
        });               
    } else if (action.type === types.UPDATE_TOOL) {    
        return Object.assign({}, state, {
            id: action.id,
            loading: true,
            error: null
        });
    } else if (action.type === types.UPDATE_TOOL_SUCCESS) {        
        return Object.assign({}, state, {
            id: action.id,
            tool: action.tool || {},
            loading: false,
            error: null
        }); 
    } else if (action.type === types.CREATE_TOOL) {      
        return Object.assign({}, state, {
            id: null,
            tool: {},
            loading: true,
            error: null
        });    
    } else if (action.type === types.CREATE_TOOL_SUCCESS) {      
        return Object.assign({}, state, {
            id: action.id,
            tool: action.tool || {},
            loading: false,
            error: null
        });       
    } else if (action.type === types.TOOLS_ERROR) {       
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }     
    return state;
}
