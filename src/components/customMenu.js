import React from 'react';
import {Link} from 'react-router-dom';
import './customMenu.css';
let barsOrX = "fa fa-bars";
let currentRoute = "/home";
 
export function CustomMenu(props) {  
    if (props && props.route)
        currentRoute = props.route;
        
    let setSelectedMenuItem = (menuItem) => {    
        // extract current location
        const page = currentRoute.indexOf('?') > -1 ? currentRoute.split('?')[0] : currentRoute;
        let pageName = page.indexOf('/') > -1 ? page.split('/')[1] : page;  
         pageName = pageName === "" ? "home" : pageName;

        // map currentRoute to menu item to be selected in menu bar
        const locationToMenu = {home: "home",
                                default: "home",
                                dashboard: "home",
                                landingpage: "home",                          
                                toolsform: "tools",
                                toolseditform: "tools",  
                                login: "login",                                                       
                                tools: "tools",
                                register: "register",
                                comments: "comments",
                                comment: "comments",
                                toolsoverview: "",  
                                contacts: "",
                                terms: ""
                                }
        
        let mappedPage = locationToMenu[pageName]; 
        if (mappedPage) {
            return  menuItem === mappedPage ? "menuitem active" : "menuitem";              
        }
        else {
            return menuItem === pageName ? "menuitem active" : "menuitem";                
        }            
    }
   
    let menuFunction = () => {
        let x = document.getElementById("myTopnav");      
        let button = document.getElementById("menuButton");
        if (x.className === "topnav") {
            x.className += " responsive";
            barsOrX = button.className === "fa fa-times" ? "icon" : "fa fa-times";
        } else {
            x.className = "topnav"  
            barsOrX =  button.className === "icon" ? "fa fa-bars" : "fa fa-times";                
        }       
    }  
              
        // Only render the log out button if we are logged in
        let logOutButton;        
        if (props.loggedIn) {
            logOutButton = (
               <Link to="#"  onClick={() => props.logOut()}  id="menuitem-logout" className={setSelectedMenuItem('logout')}> | Log out</Link>   
            );
        }
        // Only render login button if user is not logged in
        let logInButton;
        if (!props.loggedIn) {
            logInButton = (
                <Link to="/login"  id="menuitem-login" className={setSelectedMenuItem('login')}> | Log In</Link>
            );
        } 
         // Only render Sign Up button if user is not logged in 
        let signUpButton;
        if (!props.loggedIn) {
            signUpButton = (
                <Link to="/register"  id="menuitem-register" className={setSelectedMenuItem('register')}> | Sign Up</Link>                                     		                  
            );
        } 
     
        
        let  menuButton = (             
           <Link  to="" id="menuButton" onClick={() => menuFunction()}  className="icon" >
                 <i className={barsOrX}></i> 
            </Link>                                                                 		                  
        );         
             
        return (        
                <nav className="topnav" id="myTopnav">
                   <Link id="menuitem-home" to="/" className={setSelectedMenuItem('home')}>Home</Link>                   			                                    		                 
                   <Link id="menuitem-tools" to="/tools" className={setSelectedMenuItem('tools')}> | Educational Tools</Link> 
                   <Link id="menuitem-comments" to="/comments"className={setSelectedMenuItem('comments')}> | Comments</Link>           
                   {signUpButton}                                   		
                   {logInButton}
                   {logOutButton}
                   {menuButton}
                </nav>							         
        );        
    }

export default (CustomMenu);