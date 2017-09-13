import React from 'react';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import styles from '../styles/Theme.less';
import {css} from 'office-ui-fabric-react';
import ReportToHeader from './ReportToHeader.jsx';
import EmployeeDirectoryStore from '../flux/stores/EmployeeDirectoryStore.jsx';
import Avatar from 'material-ui/Avatar';
export default class ReportToColumn extends React.Component{
    constructor(props){
        super(props);
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleReportToClick = this.handleReportToClick.bind(this);

        this.state = {
            Error : false
        };
    }
    componentDidMount(){
        //go and get the information for reports to.

    }
    handleNameClick(event, id){
        debugger;
        this.props.actions.changeDetailViewId(id);
         this.setState({Error: false});
    }
    handleReportToClick(name){
        debugger;
        this.props.actions.changeDetailViewName(name);
         this.setState({Error: false});
    }
    handleError(){

        this.setState({Error: true});
    }
    render(){
        var closure = this;
        const reportToUser = EmployeeDirectoryStore.getState().get('users').find(function(value, key){
            return value.get('userName') === closure.props.user.get('reportsTo');
        });
        var body = [];
        var closure = this;
        const directReportList = this.props.directReports.toList();
        debugger;
        for(var i =0; i < directReportList.count(); i ++){
            debugger;
            var id = directReportList.get(i).get('ID');
            body.push(
                <ReportToHeader actions={this.props.actions}
                 userName={directReportList.get(i).get('userName')}
                 url = {directReportList.get(i).get('imageUrl')} 
                 id={id}/>
                );
        }

        return(
        
        <div className={css(styles.ReportToContainer)}>
            {this.props.user.get('reportsTo') == this.props.user.get('userName') ? null : 
            <div><h3>Reports To</h3>
            <div className={css(styles.reportListContainer)}>
                <div onClick={() => this.handleReportToClick(this.props.user.get('reportsTo'))} className={css(styles.ReportToLineContainer)}>
                    <div className={css(styles.reportPicture)}>
                        {
                           !this.state.Error ? reportToUser ? <Avatar src={reportToUser.get('imageUrl').get ? reportToUser.get('imageUrl').get('Url') : reportToUser.get('imageUrl').Url}
                                           onError={() => this.handleError()}  /> : <AccountBox /> :<AccountBox />
                        }
                        
                    </div>
                    <div className={css(styles.reportName)}>
                        {this.props.user.get('reportsTo')}
                    </div>
                </div>
            </div>
            </div>
            }
            <h3>Direct Reports</h3>
            <div className={css(styles.reportListContainer)}>
                {body}
            </div>
        </div>);
    }
}