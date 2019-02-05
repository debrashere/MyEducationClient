import React from 'react';

/*
    Overview of the App pages
*/
export function ToolsOverview(props) {                               
    return (
        <div className='flex-container'>                     
             <div className='flex-item'>
                <h2>Educational Tools Overview</h2>
             
                <strong>Tools </strong>
                <textarea>
                        Access to sites with reviews of educational sites geared towards children.
                 </textarea>

                 <strong>Blogs  </strong>
                 <textarea>
                          View list of tools for which users have made blog entries.
                 </textarea>

                 <strong>Blog  </strong>
                 <textarea>                  
                        View blog entries for a specific tool.
                 </textarea>                                                                     
             </div>
        </div>) 
}

export default (ToolsOverview);
