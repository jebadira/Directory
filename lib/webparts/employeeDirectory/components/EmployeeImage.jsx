import React from 'react';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import styles from '../styles/Theme.less';
import {css} from 'office-ui-fabric-react';
export default class EmployeeImage extends React.PureComponent{
    constructor(props){
        super(props);
    }


    render(){

        return(
            <div className={css(styles.ProfilePicture)}>
                {this.props.user.get('imageUrl') ? <img href={this.props.user.get('imageUrl')} /> : 
                <AccountBox style={{'width' : 300, 'height': 300}}/>
                }
                </div>
        );
    }
    
}