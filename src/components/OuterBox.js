import React from 'react';

const OuterBox = (props) => {
    return (
        <div style={{ border:"2px solid #f00", padding:"20px", width:"300px" }}>
            {props.children}
        </div>  
    );
};

export default OuterBox;