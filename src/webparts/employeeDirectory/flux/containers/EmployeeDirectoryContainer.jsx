'use strict';
import React from 'react';
import Utils from 'flux/utils';
import EmployeeDirectoryStore from '../stores/EmployeeDirectoryStore.jsx';
import EmployeeDirectory from '../../components/EmployeeDirectory.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ASUTheme from '../../styles/ASUTheme.js';
import {Fabric} from 'office-ui-fabric-react';
require("../../../../../node_modules/office-ui-fabric/dist/css/fabric.css");
require("../../../../../node_modules/office-ui-fabric-react/dist/css/fabric.css");
const styles = require('../../styles/Theme.less');
import EmployeeDirectoryActions from '../actions/EmployeeDirectoryActions.js';

class EmployeeDirectoryContainer extends React.Component{
    static getStores(){
        return [EmployeeDirectoryStore];
    }
    static calculateState(prevState, props){
        var directReports = [];
        if(EmployeeDirectoryStore.getState().get('details')){
            debugger;
            var empid = EmployeeDirectoryStore.getState().get('userId');
            var userToLookFor = EmployeeDirectoryStore.getState().get('users').get(empid.toString());
            directReports = EmployeeDirectoryStore.getState().get('users').filter(function(value, key){
                return value.get('reportsTo') === userToLookFor.get('userName')
            });
            
        }

        return {
            actions : {
                detailsView : EmployeeDirectoryActions.DetailsView,
                loadEmployees : EmployeeDirectoryActions.LoadEmployees,
                collectionView : EmployeeDirectoryActions.CollectionView,
                changeDetailViewId: EmployeeDirectoryActions.changeDetailViewID,
                changeDetailViewName:  EmployeeDirectoryActions.changeDetailViewName,
                directorySearch : EmployeeDirectoryActions.directorySearch,
            },
            users : EmployeeDirectoryStore.getState().get('users'),
            details : EmployeeDirectoryStore.getState().get('details'),
            userId : EmployeeDirectoryStore.getState().get('userId'),
            directReports : directReports,
            query : EmployeeDirectoryStore.getState().get('query'),
        }
    }
    render(){
        return (
        <Fabric>
            <MuiThemeProvider muiTheme={getMuiTheme(ASUTheme)} >
                <EmployeeDirectory
                    actions = {this.state.actions}
                    users = {this.state.users}
                    details = {this.state.details}
                    userId = {this.state.userId}
                    directReports = {this.state.directReports}
                    query={this.state.query}
                     />
            </MuiThemeProvider>
        </Fabric>

        );
    }
}

export default Utils.Container.create(EmployeeDirectoryContainer, {});