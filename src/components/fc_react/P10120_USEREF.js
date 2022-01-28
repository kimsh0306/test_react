import React from 'react';

const P10120_USEREF = () => {
  const inputRef = React.useRef();
  const divRef = React.useRef();
  React.useEffect(() => {
    //
    inputRef.current.focus();
    // document.getElementById("input").focus();

    setTimeout(() => {
      divRef.current.style.backgroundColor = "pink";
    }, 1000);
  }, []);

  return (
    <>
      <input ref={inputRef} />
      {/* <input id="input" /> */}
      <div
        ref={divRef}
        style={{ height: 100, width: 300, backgroundColor: "brown" }}
      />
    </>
  );
};

export default P10120_USEREF;