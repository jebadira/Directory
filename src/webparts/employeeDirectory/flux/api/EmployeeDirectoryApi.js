import $ from 'jquery';
import Dispatcher from '../dispatchers/dispatcher.js';
import EmployeeDirectoryActionTypes from '../actions/EmployeeDirectoryActionTypes.js';

const API = {


    loadEmployees(url){


        var promise = $.ajax({
            url : url,
            method : "GET",
            headers : { "Accept": "application/json;odata=verbose" }
        });
        var closure = this;

        promise.done(function(data){
            var users = {};
            for(var i = 0; i < data.d.results.length; i++){
                users[data.d.results[i].Id] = {
                    userName : data.d.results[i].EDirUserName,
                    firstName : data.d.results[i].EDirFirstName,
                    lastName : data.d.results[i].EDirLastName,
                    email : data.d.results[i].EDirEmail,
                    phoneNumber: data.d.results[i].EDirPhone,
                    reportsTo : data.d.results[i].EDirReports,
                    position : data.d.results[i].EDirPosition,
                    secondNumber : data.d.results[i].EDirAltPhone,
                    ID : data.d.results[i].Id,
                    imageUrl : data.d.results[i].EDirPicURL
                };
            }
            if(data.d.__next){
                closure.loadEmployees(data.d.__next);
            }
            Dispatcher.dispatch({
                type: EmployeeDirectoryActionTypes.EMPLOYEESLOADED,
                users : users
            });
        })
    }
}

export default API;