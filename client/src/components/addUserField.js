import React from "react";

export default ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...input} className="form-control"/>
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  );
};
