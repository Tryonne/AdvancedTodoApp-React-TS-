import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from "./models";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);  

  console.log(todo);

  return (
    <div className="App">
      <span className='heading'>Taskforce</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

// Outra forma de representar a mesma função:
// function App() {
// return (
//     <div className="App">      
//       Hello World!!
//     </div>
//   );   
// }

export default App;

// -----------------------------------------------------
// let name: string = 'Guilherme';
// let age: number = 30;
// let isDeveloper: boolean;
// isDeveloper = true;
// let role: [string, number, boolean];
// role = ['Guilherme', 30, true];
// 
// type Dev = {
//   neme: String;
//   age: number | string; 
//   isDeveloper?: boolean;  
// };  
// 
// let dev: Dev = {
//   neme: 'Guilherme',
//   age: 30,
// };
// 
// let lotsOfDevs: Dev[];

// let printName: (name: string) => never;
// 
// type X = {
//   a: string;
//   b: number;
// };
// 
// type Y = & {
//   c: string;
//   d: number;
// };

// ---------------------------------------------------------------
