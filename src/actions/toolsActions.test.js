import {fetchToolsSuccess,  fetchToolSuccess, createToolSuccess,updateToolSuccess} from '../actions/toolsActions';
import {FETCH_TOOLS_SUCCESS,  FETCH_TOOL_SUCCESS, CREATE_TOOL_SUCCESS, UPDATE_TOOL_SUCCESS} from '../contraints/toolsActionTypes';

describe('ToolsActions', () => {
     // Set up some dummy data
     let tools = [];
     let tool = {};
     let userName = '';
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

         tool = {
            id: 2,
            title: 'title',
            description: 'description',
            url: 'url',
            price: 2 ,
            rating: 2
        }

        userName = 'username';
     })
 
    it('Should return the action for fetchToolSuccess', () => {       
        const action = fetchToolSuccess(tool);
        expect(action.type).toEqual(FETCH_TOOL_SUCCESS);
        expect(action.tool).toEqual(tool);
        });

    it('Should return the action for fetchTools', () => {
        const action = fetchToolsSuccess(tools);
        expect(action.type).toEqual(FETCH_TOOLS_SUCCESS);
        expect(action.tools).toEqual(tools);
        }) 

    it('Should return the action for createToolSuccess', () => {
        const action = createToolSuccess(tool);
        expect(action.type).toEqual(CREATE_TOOL_SUCCESS);
        expect(action.tool).toEqual(tool);
        })  

    it('Should return the action for updateToolSuccess', () => {
        const action = updateToolSuccess(tool);
        expect(action.type).toEqual(UPDATE_TOOL_SUCCESS);
        expect(action.tool).toEqual(tool);
        })  
});
