import React from 'react';
import './App.css';
import StudentForm from './components/StudentForm'


function App() {
  return (
    < >
      <nav className='bg-black text-white flex h-18 justify-betwwen '>
        <img src="/images/companylogo2.jpg" alt='' className='h-12 pt-3 pl-4'></img>
        <h2 className='py-4  flex items-center font-bold text-lg '>Nodes N Blocks</h2>
        <ul className='flex px-24 py-4 space-x-6 justify-end'>
          <li>Home</li>
          <li>Academics</li>
          <li>Contact</li>
        </ul>
      </nav>
      <StudentForm/>
    </>
  );
}

export default App;
