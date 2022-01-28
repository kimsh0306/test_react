import React from 'react';

const P10116_HOOKFLOW = () => {
  console.log("APP render start");
  const [show, setShow] = React.useState(() => {
    console.log("APP useState");
    return false;
  });

  React.useEffect(() => {
    console.log("APP useEffect, [show]");
  }, [show]);

  function handleClick() {
    setShow(prev => !prev);   // true, false 전환

  }

  return (
    <>
      <button onClick={handleClick}>search</button>
      {show ? <>
        <input />
        <p></p>
      </> : null}
    </>
  );
};
// console.log("APP render end");

export default P10116_HOOKFLOW;