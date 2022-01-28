import React from 'react';

const Id = ({ handleIdChange }) => {
  return (
    <>
      <label>ID: </label>
      <input onChange={handleIdChange} />
    </>
  );
}

const Password = ({ handlePasswordChange }) => {
  return (
    <>
      <label>PW: </label>
      <input type="password" onChange={handlePasswordChange} />
    </>
  );
}

const P10127_STATE_RAISE = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    alert(`id: ${id}, pw: ${password}`);
  };

  return (
    <>
      <Id handleIdChange={handleIdChange} />
      <br />
      <Password handlePasswordChange={handlePasswordChange} />
      <button
        disabled={id.length === 0 || password.length === 0}
        onClick={handleLoginClick}
      >
        LOGIN
      </button>
    </>
  );
};

export default P10127_STATE_RAISE;