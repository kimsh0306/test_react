import React from 'react';
/*
반복되는 hook에 대한 처리로 함수로 만들었다.
*/
function useLocalStorage(itemName, value = "") {
  const [state, setState] = React.useState(() => {
    return window.localStorage.getItem(itemName) || value;
  });

  React.useEffect(() => {
    window.localStorage.setItem(itemName, state);
  }, [state]);

  return [state, setState];
}

const P10115_CUSTOMHOOK = () => {
  /* 
  lazy initialize =>
  useState에는 함수로 초기값을 넣어줄 수 있다.
  초기값을 리턴하는 함수를 넣어줄 수 있다.
  처음 값을 읽어오는 시간이 길더라도 이 함수가 실행되면 그 결과물을 받아올 수 있다.
  */
  // const [keyword, setKeyword] = React.useState(() => {
  //   console.log("initialize");
  //   return window.localStorage.getItem("keyword") || "";
  // });

  const [keyword, setKeyword] = useLocalStorage("keyword");
  const [result, setResult] = useLocalStorage("result");
  const [typing, setTyping] = useLocalStorage("typing", false);

  // React.useEffect(() => {
  //   window.localStorage.setItem("keyword", keyword);
  // }, [keyword]);

  function handleChange(event) {
    setKeyword(event.target.value);
    setTyping(true);
  }

  function handleClick() {
    setTyping(false);
    setResult(`We find results of ${keyword}`);
  }

  return (
    <>
      <input onChange={handleChange} value={keyword} />
      <button onClick={handleClick}>search</button>
      <p>{typing ? `Looking for ${keyword}...` : result}</p>
    </>
  );
};

export default P10115_CUSTOMHOOK;