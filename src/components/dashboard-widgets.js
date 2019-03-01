import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

/*
    Render the dashboard widgets which will link to tools and comments
    Displays on unsecured landing page and secure dashboard
*/
export class DashboardWidgets extends React.Component {
     render() {
        return (                     
            <div className="dashboard"> 
            <section  className="wrapper special">
                <div className="flex-widget-container">
                        <div className="flex-item-widget-section">
                                <Link to="/tools"><img src='https://raw.githubusercontent.com/debrashere/MyEducationClient/master/src/images/img_review.jpg' alt='"tools review img clickable' /></Link>
                                <h3><Link to="/tools">View Educational Tools submitted by App users</Link></h3> 
                                <p>This is a list of tools submitted by App users. They may or may not have comments. </p>
                        </div>
                        <div className="flex-item-widget-section">
                                <Link to="/comments"><img src='https://raw.githubusercontent.com/debrashere/MyEducationClient/master/src/images/img_blogging.png' alt='"blogs review img clickable' /></Link>
                                <h3><Link to="/comments">View comments created by App users</Link></h3>                                                  
                                <p>See what others are saying about the educational tools.</p>
                        </div>
                </div>		
            </section>                                      
            </div>                   
        );
    }
}
export default connect()(DashboardWidgets);
