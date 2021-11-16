import React from 'react';
import './App.css';
import BasicCounter from './BasicCounter';

import Greetings from './Greetings';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';
const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div>
  <BasicCounter/>
  <Greetings name="Hello" onClick={onClick}></Greetings>
  <MyForm onSubmit={onSubmit} />
  <SampleProvider>
      <ReducerSample />
    </SampleProvider>
    </div>
  
);

  
}

export default App;
