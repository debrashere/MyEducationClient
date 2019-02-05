import {authSuccess, authError} from './auth';
import {AUTH_SUCCESS, AUTH_ERROR} from './auth';

describe('AuthActions', () => {
     // Set up some dummy data
     let currentUser;
     let error;
     beforeAll(() => {
        currentUser = {
            firstName: 'firstName',
            lastName: 'lastName',
            username: 'username'
        };

        error = 'this error';         
     })
  
    it('Should return the action for authSuccess', () => {       
        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(currentUser);
        });

    it('Should return the action for authError', () => {
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
        })  
});
