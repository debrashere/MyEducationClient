import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {convertNumberToStars} from '../utils'; 

/*
    Renders list of tooks 
*/
export function ToolsList(props) {  
    const tools = (props &&  props.tools ) || [];   
    let toolUrl = (url) => {
        return url;
    }

    // Link to open the tool site in a new window
    let toolLink = (tool) => {        
        return <a href={toolUrl(tool['url'])} target="_blank">{tool['title']}</a>;
    }

    // Format the price if price is 0.00 will display Free
    let formattedPrice = (price) =>{
        if (price === 0)
            return 'Free';
        else
            return `$${price}`
    }  
    
    // Format the tool data 
    //  Tool title (name): as a link to open the tool site in a new windos
    //  Price:  If amount is zero display "Free" otherwise display $amount
    //  Blog Link:  Link to to blog page where user can view and enter blogging comments
    //  Edit Link:  Link to edit page where user can make changes to tool data 
    let params = props.currentUser.username;
    const toolsList = tools.map(function(tool, index) {  
        return (
            <div id="toolslist" className='flex-item item-box' key={index*3}>            
                <div className='item' key={index+1}>
                    <span className='item'>{toolLink(tool)}</span>  
                    <span className='item'>{convertNumberToStars(tool['rating'])}</span>                                          
                    <span className='item'><strong>Price:</strong> {formattedPrice(tool['price'])}</span>
                    <span className='item'><Link to={`blog/${tool['id']}`}>View Blog</Link></span>
                    <span className='item'><Link to={`toolseditform/${params}/${tool['id']}`}> Edit</Link></span>
                    
                </div>
                <div className='item' key={index+2}>
                    <span>{tool['description']}</span>
                </div>
            </div>);
        });            
     
    return (
        <div className='flex-container'>                     
            {toolsList}        
        </div>) 
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,   
    tools: state.toolsReducer.tools
});

export default connect(mapStateToProps)(ToolsList);
