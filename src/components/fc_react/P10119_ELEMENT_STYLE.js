import React from 'react';
import './P10119_ELEMENT_STYLE.css'

const P10119_ELEMENT_STYLE = () => {

  function Button({ className = "", color = "", style, ...rest }) {
    // return <button className={`button${className === "" ? '' : ` ${className}`}`} {...rest} />
    return (
      <button
        className={`button${color === "" ? '' : ` ${color}`}`}
        style={{ fontSize: 16, ...style }}
        {...rest}
      />
    );
  }

  return (
    <>
      <div>
        <Button style={{ borderRadius: "50%" }} >Green</Button>
        <Button color="blue" style={{ borderRadius: 8, fontSize: 6 }} >Blue</Button>
        <Button color="red">Red</Button>
        <Button color="gray">Gray</Button>
        <Button color="black">Black</Button>
      </div>
      <div>
        <button className="button">Green</button>
        <button className="button blue">Blue</button>
        <button className="button red">Red</button>
        <button className="button gray">Gray</button>
        <button className="button black">Black</button>
      </div>
    </>
  );
};

export default P10119_ELEMENT_STYLE;