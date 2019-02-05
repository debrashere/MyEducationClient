import React from 'react';
import {connect} from 'react-redux';
import {DashboardMenu} from './dashboard-menu';

export class Dashboard extends React.Component {
     render() {
        return (        
             <DashboardMenu />                   
        );
    }
}

export default connect()(Dashboard);

