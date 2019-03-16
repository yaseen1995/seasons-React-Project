import React from 'react';


const Spinner = (props) => {

return (

  <div className="ui active dimmer">
  <div className="ui text loader">{props.message}</div>
  </div>
  );

};

//Below is how you create a default props if no message given
Spinner.defaultProps = { message: 'Loading...'}; // <== that is ES2015 syntax

export default Spinner;
