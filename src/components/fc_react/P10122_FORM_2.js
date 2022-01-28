import React from 'react';

const P10122_FORM_2 = () => {
  const [messege, setMessege] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const handleSubmit = (event) => {
    // submit의 기본적인 동작을 방지
    event.preventDefault();
    alert(phoneNumber);
  };

  const handleChange = (event) => {
    if (event.target.value.startsWith(0)) {
      setMessege("Phone Number is valid");
      setPhoneNumber(event.target.value);
    } else if (event.target.value.length === 0) {
      setMessege("");
      setPhoneNumber("");
    } else {
      setMessege("Phone Number should starts with 0");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phone">Phone Number: </label>
      <br />
      <input id="phone" name="phone" onChange={handleChange} value={phoneNumber} />
      <p>{messege}</p>
      <br />
      <br />
      <button type="submit" disabled={phoneNumber.length === 0 || messege !== "Phone Number is valid"}>
        Submit
      </button>
      <p>{phoneNumber}</p>
    </form>
  );
};

export default P10122_FORM_2;