import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import Axios from 'axios';
class AlertDeleteSuccess extends Component{
  
    render(){
        return(
            <div className="alert alert-success text-center" role="alert">
                <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Success!!</strong> Deleted successfully! 
            </div>
        )
    }
}

export default AlertDeleteSuccess;

