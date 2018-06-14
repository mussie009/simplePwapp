import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContacts } from '../actions/appActions';
import _ from 'lodash';
import ContactRow from './contactRow';

class ContactsList extends Component {
    componentDidMount(){
      this.props.fetchContacts();
      console.log('from CDM: ',this.props.contacts);
    }

    renderList() {
      console.log('from RenderList: ',this.props.contacts);
      return _.map(this.props.contacts, contact => {
          return (
            <div key={contact.id} >

             <ContactRow  contact={contact} />

            </div>
            );
      });
        
    }

    render() {
      return(

        <div>
          {this.renderList()}
        </div>


      );
    };
}


function mapStateToProps(state) {
  return { contacts: state.contacts };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchContacts}, dispatch)
}

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
