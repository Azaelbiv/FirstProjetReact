import React from 'react';
import './App.css';


interface Props{
  children:React.ReactNode
}
const Content = (props: Props) => {
  return (
    <div className='content'>
      {props.children}
    </div>
  );
}



export default Content
