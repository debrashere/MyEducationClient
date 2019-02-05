import React from 'react';
import {connect} from 'react-redux';
import {DashboardWidgets} from './dashboard-widgets';

export class Dashboard extends React.Component {
     render() {
        return (        
             <DashboardWidgets />                   
        );
    }
}

export default connect()(Dashboard);

