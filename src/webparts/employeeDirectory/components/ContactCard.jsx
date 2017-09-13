import React from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import {css} from 'office-ui-fabric-react';
import styles from '../styles/Theme.less';
export default class ContactCard extends React.PureComponent{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = {Error : false}
    }

    handleClick(id, event){
        this.props.actions.detailsView(id);
    }
    handleError(){
        this.setState({Error: true});
    }
    render(){
        debugger;
        var closure = this;
        return(
            <div className={css(styles.CardContainer)}>
                <Card>
                    <CardMedia overlay={
                        <CardTitle 
                            title={closure.props.user.get('userName')}
                        />
                    }>
                    {
                        closure.state.Error ?  <AccountBox style={{'width' : 210, 'height': 210}}/> :
                        
                        <img src={closure.props.user.get('imageUrl').get ? closure.props.user.get('imageUrl').get('Url') : closure.props.user.get('imageUrl').Url } onError={() => closure.handleError()}/>
                    }
                        
                    </CardMedia>
                    <CardTitle subtitle={closure.props.user.get('position')} />
                    <CardActions>
                        <FlatButton primary={true} label="Email" href={"mailto:" + closure.props.user.get("email")}/>
                        <FlatButton secondary={true} label="Details" onClick={() => this.handleClick(this.props.user.get('ID'))} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}