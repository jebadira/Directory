import React from 'react';
import styles from '../styles/Theme.less';
import {css} from 'office-ui-fabric-react';

export default class EmployeeName extends React.PureComponent{
    constructor(props){
        super(props);
    }


    render(){


        return(<div className={css(styles.EmployeeNameContainer)}>
                    <h2>{this.props.user.get('userName')}</h2>
                    <h3>{this.props.user.get('position')}</h3>
                </div>);
    }
}