import React, {useState} from 'react'
import Title from './components/title';
import Count from './components/count';
import CountBtn from './components/countBtn';
import Age from './components/age';
import AgeBtn from './components/ageBtn';


const App = ({initialCount}) => {
  const[count, setCount] = useState(0);
  const[age, setAge] = useState(10);  
  
  const incrementCount = () => {
    setCount(count+1);
  }
  const incrementAge = () => {
    setAge(age+1);
  }
  
  return(
    <>
      <Title/>
      <Count count={count}/>
      <CountBtn handleCount={incrementCount}/>
      <Age age={age}/>
      <AgeBtn handleAge={incrementAge}/>
    </>
  );
}

export default App;
