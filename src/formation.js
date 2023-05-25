import React from 'react'
// import './index.css'
const BookList= () => {
  return (
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}
const Book =()=>{
    return(
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
}
const Image =()=> <img src="https://images-na.ssl-images-amazon.com/images/I/71mCCxaC6KL._AC_UL600_SR600,400_.jpg" alt="justin A. REynold" />
const Title =()=> <h2>Miles Morales: Shock Waves</h2>
const Author =()=>{
    return <h4>Justin A. Reynolds</h4>
}

export default BookList;

