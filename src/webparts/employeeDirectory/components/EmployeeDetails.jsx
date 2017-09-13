import React from 'react';
import EmployeeImage from './EmployeeImage.jsx';
import EmployeeName from './EmployeeName.jsx'
import ContactInformation from './ContactInformation.jsx';
import ReportToColumn from './ReportToColumn.jsx';

import styles from '../styles/Theme.less';
import {css} from 'office-ui-fabric-react';
export default class EmployeeDetails extends React.PureComponent{
    constructor(props){
        super(props);
    }
 

    render(){
        debugger;
        return (<div className={css(styles.EmployeeDetails)}>
                    
                    <EmployeeImage user={this.props.user}/>
                    <EmployeeName user={this.props.user}/>
                    <ReportToColumn actions={this.props.actions} directReports={this.props.directReports} user={this.props.user}/>
                   <ContactInformation user={this.props.user}/>
                </div>);
    }
}

