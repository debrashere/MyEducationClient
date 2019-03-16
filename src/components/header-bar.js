import React from 'react';
import CustomMenu from './customMenu';
 
export function HeaderBar(props) {  
    // Only render the user information if the user is logged in
    let userInfo;   
    if (props.loggedIn) {               
        userInfo = (                 
            <div className="header-user-info">
                <em>Username:</em> {props.currentUser.username} &nbsp;&nbsp;
                <em> Name:</em> {props.currentUser.firstName} {props.currentUser.lastName}
            </div>                                                       
        );
    }  
    let menuParams = {route: props.route, loggedIn: props.loggedIn}; 
    return (      
        <header>  
             <CustomMenu  {...menuParams}  logOut={props.logOut}/>            
            <div>
                {userInfo}
            </div>  
        </header>    								         
    );        
}

export default (HeaderBar);