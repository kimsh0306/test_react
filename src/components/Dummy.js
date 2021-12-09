import React from 'react';

const Dummy = (props) => {
    return (
        <div>
            <h2>Dummy Component</h2>
            <div>
                <p>{props.name}</p>
                <p>{props.age}</p>
                <p>{props.hobby}</p>
                
            </div>
        </div>
    );
};

export default Dummy;