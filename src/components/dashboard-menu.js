import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class DashboardMenu extends React.Component {
     render() {
        return (                     
            <div className="dashboard"> 
            <section  className="wrapper  special">
            <div className="flex-container">
                    <div className="flex-item-tool-sectionn">
                        <section className="box">
                            <Link to="/tools"><img src='https://raw.githubusercontent.com/debrashere/MyEducationClient/master/src/images/img_review.jpg' alt='"review img clickable' /></Link>
                            <h3>View Educational Tools reviewed by App users</h3>
                            <p>List of educational tools submitted by App users</p>
                        </section>
                    </div>
                    <div className="flex-item-tool-section">
                        <section className="box">
                            <Link to="/blogs"><img src='https://raw.githubusercontent.com/debrashere/MyEducationClient/master/src/images/img_blogging.png' alt='"review img clickable' /></Link>
                            <h3>View blogs created by App users</h3>
                            <p>See what others are saying about educational tools.</p>
                        </section>
                    </div>
            </div>		
            </section>                                      
            </div>                   
        );
    }
}
export default connect()(DashboardMenu);
