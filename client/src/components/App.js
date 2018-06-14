import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from '../actions';


  import Header from './Header';
  import Contacts from './Contacts';
  import UserForm from './UserForm';
  
class App extends Component {
    
    render(){
        return (
        <div className="container">
        <BrowserRouter>
            <div>
            <Header />
            <Route exact path="/" component={Contacts} /> 
            <Route exact path="/form" component={UserForm} /> 
            </div>
        </BrowserRouter>
        </div>
        );
    }
};
export default App;
  
