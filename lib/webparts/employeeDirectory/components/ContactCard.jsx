import React from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {css} from 'office-ui-fabric-react';
import styles from '../styles/Theme.less';
export default class ContactCard extends React.PureComponent{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id, event){
        this.props.actions.detailsView(id);
    }
    render(){
        debugger;
        var closure = this;
        console.log(this.props.user);
        return(
            <div className={css(styles.CardContainer)}>
                <Card>
                    <CardMedia>
                        <img src='#' style={{'display' : 'none'}}/>
                    </CardMedia>
                    <CardTitle 
                    title={closure.props.user.get('firstName') + ' '  + closure.props.user.get('lastName')}
                    subtitle={closure.props.user.get('position')}
                    />
                    <CardActions>
                        <FlatButton primary={true} label="Email" href={"mailto:" + closure.props.user.get("email")}/>
                        <FlatButton secondary={true} label="Details" onClick={() => this.handleClick(this.props.user.get('ID'))} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}