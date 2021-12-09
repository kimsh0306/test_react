import './App.css';
import Dummy from './components/Dummy';
import OuterBox from './components/OuterBox';

function App() {
  const propsObj = {
    age: 22,
    hobby: "Soccer"
  };
  return (
    <div className="App">
      <hi>App</hi>
      <OuterBox>
        <Dummy name="Mike" age="20" hobby="baseball" />
      </OuterBox>
      {/*
      props는 object이기 때문에,,, 
      값이 같은 props를 먼저 별도의 object로 선언하고 
      ...propsObj => 이렇게 object를 펼쳐주었다.
      */}
      <Dummy name="Jane" {...propsObj} />
      <Dummy name="Lime" {...propsObj} />
    </div>
  );
}

export default App;
