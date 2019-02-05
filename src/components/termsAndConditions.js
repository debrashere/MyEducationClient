import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
 
export class Terms extends React.Component {
    render() {
        return (        
            <div className="terms-and-conditions"> 
             <section id="terms">
				<div className="flex-container">
						<div className="flex-item">
							<section className="box">
								<h2>Terms and Conditions</h2>
                                <h3>BY REGISTERING FOR THIS WEBSITE AND USING ANY OF THE TOOLS, YOU ACCEPT THE FOLLOWING TERMS AND CONDITIONS.</h3>
								<p><em>What is personal information?</em></p>
                                <p>Personal information includes your demographic information (including name, email address, gender).</p>
							</section>
						</div>
				</div>		
			</section>                                      
            </div>                        
        );
    }
}

export default requiresLogin()(connect()(Terms));
