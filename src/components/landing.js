import React from 'react';
 
export class Landing extends React.Component {
     
    render() {
     
        return (
            <div>
                <div>  
                    <span className='item'>Blog Title ***</span> 
                </div> 
                <div className='flex-container'>                                            
                    <div className='flex-item box' key="1"> 
                        <div className='item comment-author'>UserName</div>             
                        <div className='item'>Blog Comments</div>                                                           
                    </div>     
                </div>
            </div>) 
    }
}

export default (Landing);
