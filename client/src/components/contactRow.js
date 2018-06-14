import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectContact } from '../actions/index';
import { bindActionCreators } from 'redux';
import ContactDetail from './contactDetail';

class ContactRow extends Component {

  constructor(props) {
    super(props);
    this.selectContact = this.selectContact.bind(this);
    this.state = {
      visibility: false
    };
  }

  selectContact() {
    this.props.selectContact(this.props.contact);
    
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    let style = {
      cursor: 'pointer',
      listStyleType: 'none',
      fontSize: '18px'
    }
    return(
          <div className="list-group" >

          <li onClick={this.selectContact} className="list-group-item " style={style}>
          
          {this.props.contact.name}
          {this.state.visibility ? <i className="large float-sm-right material-icons">arrow_drop_up</i> :
          <i className="large float-sm-right material-icons">arrow_drop_down</i>
          }
          </li>

          {this.state.visibility ?
            <ContactDetail /> :
             null
          }
          </div>
        );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({selectContact}, dispatch);
}

export default connect(null, mapDispatchToProps)(ContactRow);
