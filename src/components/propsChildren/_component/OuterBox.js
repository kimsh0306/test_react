import React from 'react';

const OuterBox = (props) => {
  return (
    <div 
      style={{ 
        // padding: "10 10px 10px 10px", 
        // textAlign: "center",
        width: "210px", 
        height: "220px",
        border: "3px solid #333", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      {props.children}
    </div>
  );
};

export default OuterBox;