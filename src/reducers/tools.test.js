import {toolsReducer} from './tools';
import * as types from '../contraints/toolsActionTypes';

describe('toolsReducer', () => {
    // Set up some dummy data
    let tool = {};
    let tools = [];
    let fetchToolAction;
    let fetchToolActionResult;
    let fetchToolResult;
    let fetchToolSuccessAction;
    let fetchToolSuccessActionResult;

    let fetchToolsAction;
    let fetchToolsActionResult;
    let fetchToolsSuccessAction;
    let fetchToolsSuccessActionResult;

    let createToolAction;
    let createToolActionResult;
    let createToolSuccessAction;
    let createToolSuccessActionResult;

    let updateToolAction;
    let updateToolActionResult;
    let updateToolSuccessAction;
    let updateToolSuccessActionResult;

    let toolErrorAction;
    let toolErrorResult;
    beforeAll(() => {
        for (let i = 1; i < 6 ; i++) {
            tools.push({
                id: i,       
                title: `title-${i}`,
                description: `description-${i}`,
                url: `url${i}`,
                price: i ,
                rating: i
            });
        };
    })

    tool = {         
        id: '1',
        title: 'title',
        description: 'description',
        url: 'url',
        price: 1 ,
        rating: 1
    }; 

    fetchToolAction = { 
        type: types.FETCH_TOOL
    }
    fetchToolActionResult = { 
        id: undefined,
        toolId: '',
        tool: {},
        tools: [],
        loading: true,
        error: null
    }
    fetchToolSuccessAction = { 
        type: types.FETCH_TOOL_SUCCESS,      
        tool: tool
    }
    fetchToolSuccessActionResult = { 
        id: tool.id,
        toolId: tool.id,
        tool: tool,
        tools: [],
        loading: false,
        error: null
    };   

    fetchToolsAction = { 
        type: types.FETCH_TOOLS
    }
    fetchToolsActionResult = {
        id: null, 
        toolId: '',
        tool: {},
        tools: [],
        loading: true,
        error: null
    }
    fetchToolsSuccessAction = { 
        type: types.FETCH_TOOLS_SUCCESS,
        tools: tools
    }
    fetchToolsSuccessActionResult = { 
        error: null,
        id: null,
        loading: false,
        toolId: '',
        tool: {},
        tools: tools,    
    }


    createToolAction = { 
        type: types.CREATE_TOOL
    }
    createToolActionResult = { 
        error: null,
        id: null,
        loading: true,
        toolId: '',
        tool: {},
        tools: []      
    }
    createToolSuccessAction = { 
        type: types.CREATE_TOOL_SUCCESS,
        tool: tool
    }
    createToolSuccessActionResult = { 
        error: null,
        id: undefined,     
        loading: false,   
        toolId: '',  
        tool: tool,
        tools: []
    }


    updateToolAction = { 
        type: types.UPDATE_TOOL
    }
    
    updateToolActionResult = { 
        id: undefined,
        error: null,
        loading: true,
        toolId: "",
        tool: {},
        tools: []  
    }
     
    updateToolSuccessAction = { 
        type: types.UPDATE_TOOL_SUCCESS,
        tool: tool
    }
    updateToolSuccessActionResult = {
        error: null,
        id: undefined,
        loading: false,
        toolId: '',
        tool: tool,
        tools: []             
    }
 
    toolErrorAction = {
        type: types.TOOL_ERROR,
        error: 'error' 
    }
    toolErrorResult =  {
        error: 'error', 
        id: null,
        loading: false,
        toolId: '',
        tool: {},
        tools: []          
    }

    const initialState = {
        id: null, 
        error: null, 
        loading: false, 
        tool: {}, 
        toolId: "", 
        tools: []
    };

    it('Should set the initial state when nothing is passed in', () => {
        let state = toolsReducer(undefined,  {type: '__UNKNOWN'});         
        expect(state).toEqual(initialState) ;   
    });

    it('Should set the state for FETCH_TOOL', () => {
        let state = toolsReducer(initialState, fetchToolAction );         
        expect(state).toEqual(fetchToolActionResult) ;   
    });
 
    it('Should set the state for FETCH_TOOL_SUCCESS', () => {
        let state = toolsReducer(fetchToolActionResult, fetchToolSuccessAction );         
        expect(state).toEqual(fetchToolSuccessActionResult) ;   
    }); 

    it('Should set the state for FETCH_TOOLS', () => {
        let state = toolsReducer(initialState, fetchToolsAction );         
        expect(state).toEqual(fetchToolsActionResult) ;   
    });
 
    it('Should set the state for FETCH_TOOLS_SUCCESS', () => {
        let state = toolsReducer(fetchToolsActionResult, fetchToolsSuccessAction );         
        expect(state).toEqual(fetchToolsSuccessActionResult) ;   
    }); 

    it('Should set the state for CREATE_TOOL', () => {
        let state = toolsReducer(initialState, createToolAction );         
        expect(state).toEqual(createToolActionResult) ;   
    });
 
    it('Should set the state for CREATE_TOOL_SUCCESS', () => {
        let state = toolsReducer(createToolActionResult, createToolSuccessAction);         
        expect(state).toEqual(createToolSuccessActionResult) ;   
    }); 
    
    it('Should set the state for UPDATE_TOOL', () => {
        let state = toolsReducer(initialState, updateToolAction );         
        expect(state).toEqual(updateToolActionResult) ;   
    });

    it('Should set the state for UPDATE_TOOL_SUCCESS', () => {
        let state = toolsReducer(updateToolActionResult, updateToolSuccessAction);         
        expect(state).toEqual(updateToolSuccessActionResult) ;   
    });  
 /*
    it('Should set the state for action TOOL_ERROR', () => {
        let state = toolsReducer(initialState,  toolErrorAction);         
        expect(state).toEqual(toolErrorResult) ;   
    });
*/        
})  
