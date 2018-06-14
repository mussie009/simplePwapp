import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import addUserField from './addUserField';
import { connect } from 'react-redux';
import { createUser }from '../actions/appActions';
import isValidEmail from 'sane-email-validation';


class UserForm extends Component {
    handleFormSubmit(formProps) {
      //call action creator to add prodcuts
      console.log("formProps: ", formProps);
      this.props.createUser(formProps);
    }
    renderFields() {
        return (
          <div>
            <Field
              label="Name"
              type="text"
              name="name"
              component={addUserField}
            />
            <Field
              label="Email"
              type="text"
              name="email"
              component={addUserField}
            />
            <Field
              label="Phone"
              type="number"
              name="phone"
              component={addUserField}
            />
            <Field
              label="User Name"
              type="text"
              name="username"
              component={addUserField}
            />
            <Field
              label="Website"
              type="text"
              name="website"
              component={addUserField}
            />
            <Field
              label="Website"
              type="text"
              name="website"
              component={addUserField}
            />
          </div>
        );
      }
    render() {
      const {
        
        handleSubmit
        
      } = this.props;

        const style = {
            paddingLeft: '10px'
        }

        return (
          <div className="row">
            <form className="col-sm-8" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    {this.renderFields()}
                    <br />
            
                    <button
                        className="btn btn-primary"
                        action="submit"
                        
                        
                    >
                        Submit <i className="material-icons float-sm-right" style={style}>send</i>
                    </button>
            </form>
          </div>
        );
      }
}
function validate(formProps) {
  const errors = {};
  // console.log(formProps);

  if (!formProps.name) {
    errors.name = "Please enter a name";
  }

  if (!formProps.email) {
    errors.email = "Please enter an email";
  }
  else if(!isValidEmail(formProps.email)){
    errors.email = "Invalid email";
  }

  if (!formProps.phone) {
    errors.phone = "Please enter a phone number";
  }
  return errors;
}

const userAddForm = reduxForm({ 
    validate,
    form: 'userform'
})(UserForm);

export default connect (null, {createUser})(userAddForm);