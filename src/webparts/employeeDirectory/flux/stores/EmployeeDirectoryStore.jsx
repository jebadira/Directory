import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import Dispatcher from '../dispatchers/dispatcher.js';
import EmployeeDirectoryActionTypes from '../actions/EmployeeDirectoryActionTypes.js';
class EmployeeDirectoryStore extends ReduceStore{
    constructor(){
        super(Dispatcher);
    }

    getInitialState(){
        const init = Immutable.Map();
        const set = init.merge({
            details : false,
            users : Immutable.Map(),
            userId : 0,
            query : ''
        });
        return set;
    }

    reduce(state,action){
        switch(action.type){
            case EmployeeDirectoryActionTypes.EMPLOYEESLOADED:
            const updatedUsers = state.get('users').merge(action.users);

                return state.merge({
                    users : updatedUsers
                });
                
            break;
            case EmployeeDirectoryActionTypes.EMPLOYEEDETAILSVIEW:
                return state.merge({
                    userId : action.employeeId,
                    details : true
                })
            break;
            case EmployeeDirectoryActionTypes.EMPLOYEECOLLECTIONVIEW:
                return state.merge({
                    details : false,
                    userId : 0,
                    query : ''
                });
                break;
            case EmployeeDirectoryActionTypes.CHANGEDETAILSVIEWID:
                return state.merge({
                    userId : action.employeeId
                });
                break;
            case EmployeeDirectoryActionTypes.SEARCHDIRECTORY:{
                return state.merge({
                    query : action.query
                });
                break;
            }
            default:
                return state;
                break;
        }

    }

}
export default new EmployeeDirectoryStore();