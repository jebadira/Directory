import React from 'react';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import styles from '../styles/Theme.less';
import {css} from 'office-ui-fabric-react';
export default class EmployeeImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {Error : false};
        this.handleError = this.handleError.bind(this);
    }

handleError(){
        this.setState({Error: true});
    }
    componentWillReceiveProps(nextprops){
        if(nextprops.user.get('imageUrl').get("Url") != this.props.user.get('imageUrl').get("Url")
            ||
            nextprops.user.get('imageUrl').Url != this.props.user.get('imageUrl').Url){
                this.setState({Error : false});
            }
    }
    render(){

        return(
            <div className={css(styles.ProfilePicture)}>
                {!this.state.Error ? this.props.user.get('imageUrl') ? 
                    <img width="210px" height="210px" src={this.props.user.get('imageUrl').get ?
                        this.props.user.get('imageUrl').get("Url") : 
                        this.props.user.get("imageUrl").Url} 
                        onError={() => this.handleError()} /> : 
                <AccountBox style={{'width' : 210, 'height': 210}}/> :
                <AccountBox style={{'width' : 210, 'height': 210}}/>
                }
                </div>
        );
    }
    
}