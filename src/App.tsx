import React from 'react';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>Taskforce</span>
    
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
