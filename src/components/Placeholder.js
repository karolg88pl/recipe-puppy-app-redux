import React from 'react';

const Placeholder = () => (
  <div
    style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}
  >
    <img
      alt="No results!"
      src={require("../static/no_results.jpg")}
      style={{width: '300px', height: '300px'}}
       />
  </div>
);

export default Placeholder;
