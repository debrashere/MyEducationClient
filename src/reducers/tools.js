import * as types from '../contraints/toolsActionTypes';

const initialState = {
    id: null,
    toolId: '',
    tool: {},
    tools: [],
    loading: false,
    error: null
};

export const toolsReducer = (state = initialState, action) => {
    if (action.type === types.SET_TOOL) {  
        return Object.assign({}, state, {      
            tool: {},
            loading: true,
            error: null
        });        
    }   
    if (action.type === types.SET_TOOL_SUCCESS) {                
        return Object.assign({}, state, {      
            id: action.tool.id || '',
            toolId: action.tool.id || '',
            tool: action.tool || {},            
            loading: false,
            error: null
        });        
    }      
    else if (action.type === types.FETCH_TOOLS) {        
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
            toolId: '',
            tool: {},
            loading: true,
            error: null
        });   
    }            
    else if (action.type === types.FETCH_TOOL_SUCCESS) {
        return Object.assign({}, state, {
            id: action.tool.id || '',
            toolId: action.tool.id || '',    
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
