import $ from 'jquery';
import API from '../api/EmployeeDirectoryApi.js';
import Dispatcher from '../dispatchers/dispatcher.js'
import EmployeeDirectoryActionTypes from '../actions/EmployeeDirectoryActionTypes.js'
import EmployeeDirectoryStore from '../stores/EmployeeDirectoryStore.jsx';
const Actions = {

    LoadEmployees(){
        API.loadEmployees("https://asuep.sharepoint.com/sites/DeviLink/_api/lists/GetByTitle('Employee Directory')/items");
    },
    DetailsView(id){
        Dispatcher.dispatch({
            type: EmployeeDirectoryActionTypes.EMPLOYEEDETAILSVIEW,
            employeeId : id
        });
    },
    CollectionView(){
        Dispatcher.dispatch({
            type : EmployeeDirectoryActionTypes.EMPLOYEECOLLECTIONVIEW
        });
    },
    changeDetailViewID(id){
        Dispatcher.dispatch({
            type: EmployeeDirectoryActionTypes.CHANGEDETAILSVIEWID,
            employeeId : id
        });
    },
    changeDetailViewName(name){
        var user = EmployeeDirectoryStore.getState().get('users').find(function(value, key){
            return name.indexOf(value.get('firstName')) >= 0 && name.indexOf(value.get('lastName')) >= 0;
        });
        if(user){
             Dispatcher.dispatch({
                type: EmployeeDirectoryActionTypes.CHANGEDETAILSVIEWID,
                employeeId : user.get('ID')
            });
        }
    },
    directorySearch(query){

        Dispatcher.dispatch({
            type: EmployeeDirectoryActionTypes.SEARCHDIRECTORY,
            query : query
        });
    }


};

export default Actions;