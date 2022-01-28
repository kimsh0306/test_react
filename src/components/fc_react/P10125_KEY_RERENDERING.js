import React from 'react';

const todos = [
  { id: 1, value: "Wash dishes" },
  { id: 2, value: "Clean the bed" },
  { id: 3, value: "Running" },
  { id: 4, value: "Learning" },
]

const P10125_KEY_RERENDERING = () => {
  const [items, setItems] = React.useState(todos);

  const handleDoneClick = (todo) => {
    setItems((items) => items.filter((item) => item !== todo));
  };

  const handleRestoreClick = () => {
    setItems((items) => [
      ...items, 
      todos.find((item) => !items.includes(item))
    ]);
  };

  return (
    <>
      {items.map((todo) => (
        <div key={todo.id}>
          <span>{todo.value}</span>
          <button onClick={() => handleDoneClick(todo)}>Done</button>
        </div>
      ))}
      <br />
      <button onClick={handleRestoreClick}>Restore</button>
    </>
  );
};

export default P10125_KEY_RERENDERING;