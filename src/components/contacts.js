import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
 
export class Contacts extends React.Component {
    render() {
        return (        
            <div className="contacts"> 
             <section id="contacts">
				<div className="flex-container">
						<div className="flex-item-tool-section">
							<section className="box">
								<h2>Contacts</h2>
                                 <p><em>Contact via slack</em></p>
                             </section>
						</div>
				</div>		
			</section>                                      
            </div>                        
        );
    }
}

export default requiresLogin()(connect()(Contacts));
