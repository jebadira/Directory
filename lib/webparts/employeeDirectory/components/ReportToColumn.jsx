import React from 'react';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import styles from '../styles/Theme.less';
import {css} from 'office-ui-fabric-react';
export default class ReportToColumn extends React.PureComponent{
    constructor(props){
        super(props);
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleReportToClick = this.handleReportToClick.bind(this);
    }
    componentDidMount(){
        //go and get the information for reports to.

    }
    handleNameClick(id){
        debugger;
        this.props.actions.changeDetailViewId(id);
    }
    handleReportToClick(name){
        debugger;
        this.props.actions.changeDetailViewName(name);
    }
    render(){
        var body = [];
        var closure = this;
        const directReportList = this.props.directReports.toList();
        debugger;
        for(var i =0; i < directReportList.count(); i ++){
            debugger;
            var id = directReportList.get(i).get('ID');
            body.push(
                <div 
                    onClick={() => closure.handleNameClick(id)} 
                    className={css(styles.ReportToLineContainer)}>
                    <div className={css(styles.reportPicture)}>
                        <AccountBox />
                    </div>
                    <div className={css(styles.reportName)}>
                        {directReportList.get(i).get('firstName') + " " + directReportList.get(i).get('lastName')}
                    </div>
                </div>
                );
        }

        return(
        
        <div className={css(styles.ReportToContainer)}>
            <h3>Reports To</h3>
            <div className={css(styles.reportListContainer)}>
                <div onClick={() => this.handleReportToClick(this.props.user.get('reportsTo'))} className={css(styles.ReportToLineContainer)}>
                    <div className={css(styles.reportPicture)}>
                        <AccountBox />
                    </div>
                    <div className={css(styles.reportName)}>
                        {this.props.user.get('reportsTo')}
                    </div>
                </div>
            </div>
            <h3>Direct Reports</h3>
            <div className={css(styles.reportListContainer)}>
                {body}
            </div>
        </div>);
    }
}