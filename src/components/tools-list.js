import React from 'react';
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
        return <a className="Link" href={toolUrl(tool['url'])} target="_blank">{tool['title']}</a>;
    }

    // Format the price if price is 0.00 will display Free
    let formattedPrice = (price) => {
        if (price === 0)
            return 'Free';
        else
            return `$${price}`
    }  
   
    let params = (toolId) => {
        let tool = {};
        const tools =  props.tools.filter( tool => tool.id === toolId);
        if (tools)
        {
            tool = tools[0];
        }          
        return tool;
    }   

    // Format the tool data 
    //  Tool title (name): as a link to open the tool site in a new windos
    //  Price:  If amount is zero display "Free" otherwise display $amount
    //  Blog Link:  Link to to blog page where user can view and enter blogging comments
    //  Edit Link:  Link to edit page where user can make changes to tool data    
    const toolsList = tools.map(function(tool, index) {  
        return (
            <div id="toolslist" className='flex-item item-box' key={index*3}>            
                <div className='item' key={index+1}>
                    <span className='item'>{toolLink(tool)}</span>  
                    <span className='item'>{convertNumberToStars(tool['rating'])}</span>                                          
                    <span className='item'><strong>Price:</strong> {formattedPrice(tool['price'])}</span>
                    <span className='item price'><Link className="styled-link" to={`comment/${tool['id']}`}>View Comments</Link></span>
                    <span className='item'><Link className="styled-link" to={`toolseditform/${tool['id']}`} tool={params(tool['id'])}>Edit</Link></span>                       
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

export default (ToolsList);
 
