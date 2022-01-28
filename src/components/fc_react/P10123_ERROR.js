import React from 'react';

class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <p>There is some error...</p>;
    }

    return this.props.children;
  }
}

const Child = () => {
  throw new Error("Something Wrong...");
  return <p>Child...</p>;
};

// const Fallback = ({ error }) => {
//   alert(error.message);
//   return <p>THERE is some ERROR...</p>
// };

const P10123_ERROR = () => {
  return (
    <>
      <p>App</p>
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    </>
  );
};

export default P10123_ERROR;