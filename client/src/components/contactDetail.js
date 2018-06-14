import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class ContactDetail extends Component {
  renderAddress(){
    return _.map(this.props.activeContact.address, element => {
      if(typeof element !== 'object'){
      return (
        
        <ul key={element} >

         <li>{element}</li>

        </ul>
        );
      }
  });
  }
  render() {
    let style = {
      background: "#f0f0f5",
      padding: '10px 40px',
      fontSize: 'medium',
      color: 'green',
      wordSpacing: '10px'

    }
    if (!this.props.activeContact){
      return <div>Click a contact to see details.</div>
    }
    return (

      <div className="posdetails">
        <div style={style} className="collection-item">Name: {this.props.activeContact.name}</div>
        <div style={style} className="collection-item" >Phone: {this.props.activeContact.phone}</div>
        <div style={style} className="collection-item">Email: {this.props.activeContact.email}</div>
        <div style={style} className="collection-item">Website: {this.props.activeContact.website}</div>
        <div style={style} className="collection-item">Address: {this.renderAddress()}</div>
  
      </div>

    );
  }
}



function mapStateToProps({activeContact}) {
  return {activeContact};
}

export default connect(mapStateToProps)(ContactDetail);
