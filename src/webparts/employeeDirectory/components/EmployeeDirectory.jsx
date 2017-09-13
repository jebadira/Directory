import React from 'react';
import ContactCard from './ContactCard.jsx';
import EmployeeDetails from './EmployeeDetails.jsx';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import {SearchBox} from 'office-ui-fabric-react/lib/SearchBox';
import styles from '../styles/Theme.less';
import {css} from 'office-ui-fabric-react';
import Fuse from 'fuse.js';
import Immutable from 'immutable';
export default class EmployeeDirectory extends React.Component{


    constructor(props){
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this);

    }
    handleBackClick() { 
        debugger;
        this.props.actions.collectionView();
    }
    componentDidMount(){
        this.props.actions.loadEmployees();
    }
    handleSearchChange(value){
        this.props.actions.directorySearch(value);
    }
    render(){
        debugger;
        var body = null;
        var collection = null;
        var closure = this;
        if(this.props.details){
            body = (<div>
                        <EmployeeDetails 
                        directReports={this.props.directReports}
                        actions={this.props.actions} 
                        user={this.props.users.find(function(user){
                                return closure.props.userId === user.get('ID')})}
                        /></div>);
        }
        if(!this.props.details){
            var cardCollection;
            if(this.props.query){
                debugger;
                var options = {
                    shouldSort: true,
                    threshold: 0.3,
                    location: 0,
                    distance: 100,
                    maxPatternLength: 32,
                    minMatchCharLength: 3,
                    tokensize : true,
                    findAllMatches: true,
                    caseSensitive: false,

                    keys: [
                        "userName",
                        "firstName",
                        "lastName",
                        "email",
                        "phoneNumber",
                        "position",
                        "secondNumber"
                    ]
                };
                
                var fuse = new Fuse(this.props.users.toList().toJS(), options);
                var results = fuse.search(this.props.query);
                var resultMap = new Immutable.Map();
                for(var i = 0; i < results.length; i++){
                    var tempobj = {};
                    tempobj[i.toString()] = new Immutable.Map(results[i]); 
                   resultMap =  resultMap.merge(tempobj);
                }
                var cardCollection = resultMap.map(function(user, key){
                    return <ContactCard actions={closure.props.actions} key={key} user={user}/>  
                });
            }
            else{
                  /*  cardCollection = this.props.users.map(function(user, key){
                        return <ContactCard actions={closure.props.actions} key={key} user={user}/>  
                    });*/
                    cardCollection = (
                        <div><h3>Search for someone by name, email, phone number or position</h3></div>
                    );

                 }
            collection = (<div className={css(styles.CardCollection)}>
                        {cardCollection}
                    </div>);
            }
            return (
                <div>
                    <div>
                        <SearchBox onChange={(val) => this.handleSearchChange(val)} 
                            onSearch={(val) => this.handleSearchChange(val)}
                            labelText="Search the directory..."/>
                    </div>
                    
                    <div className={this.props.details ? css(styles.BackButton) : css(styles.DisplayNone)}>
                            <IconButton onClick={()=> this.handleBackClick()}>
                                <ArrowBack />
                            </IconButton>
                        </div>
                    <div>
                        {collection}
                        {body}
                    </div>
                </div>
            )
    }
}