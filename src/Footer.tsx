import React from 'react';
import "./App.css";


interface Props{
    children?:React.ReactNode
}
const Content = (props: Props) => {
  return (
    <div className='FooterApp'>
      <h1>Our Footer</h1>
      {props.children}
    </div>
  )
}

export default Content

