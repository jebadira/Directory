import React from 'react';
import styles from '../styles/Theme.less';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import {css} from 'office-ui-fabric-react';
import Avatar from 'material-ui/Avatar';
export default class ReportToHeader extends React.Component{
    constructor(props){
        super(props);
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = {Error :false};
    }

    handleError(){
        this.setState({Error: true});
    }
    handleNameClick(id){
        this.props.actions.changeDetailViewId(id);
        this.setState({Error : false});
    }

    render(){
        

        return (
           <div 
                onClick={() => this.handleNameClick(this.props.id)} 
                className={css(styles.ReportToLineContainer)}>
                <div className={css(styles.reportPicture)}>
                    {
                        !this.state.Error ? <Avatar src={this.props.url.get ? this.props.url.get('Url') : this.props.url.Url} 
                        onError={() => this.handleError()} />
                            :
                            <AccountBox />
                    }
                </div>
                <div className={css(styles.reportName)}>
                    {this.props.userName}
                </div>
        </div>
        );
    }
}
