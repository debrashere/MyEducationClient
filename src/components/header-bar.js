import React from 'react';
 
export function HeaderBar(props) {  
 
    console.log("CONTAINER HeaderBar render this.props", props);
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
    return (      
        <header>             
            <div>
                {userInfo}
            </div>
        </header>    								         
    );        
}

export default (HeaderBar);