import React from 'react';

/*
    Overview of the App pages
*/
export function ToolsOverview() {                               
    return (
        <div className='flex-container'>                     
             <div className='flex-item'>
                <h2>Educational Tools Overview</h2>
             
                 <strong>Educational Tools  </strong>
                 <p>
                          View list of tools users have submitted to this app.
                          You will be able to link to the comments page for a specifice tool from here.
                 </p>

                 <strong>Comments  </strong>
                 <p>                  
                        View list of tools for which users have added comments.
                        This allows you to quickly see what tools users are commenting about the most.
                 </p>                                                                     
             </div>
        </div>) 
}

export default (ToolsOverview);
