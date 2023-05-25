import React from 'react'
import './App.css'
const qrr = [10,22,35]
const Produit=()=>{
    return(
      <section className='produits'>
        {qrr.map((elem,idx) => {
          return <ProduitType1 price={elem} />
        })}
        
      </section>
    );
}

const ProduitType1=(props:any)=>{
    return (
    <article className='produitTypes'>
        <Image/>
        <Titre/>
        <Prix price={props.price}/>
    </article>
    );
}

const Titre=()=><h3>paracetamole</h3>
const Image=()=> <img src="https://m.media-amazon.com/images/I/61pSgPOzmtL._AC_UL400_.jpg" alt="paracetamole" />
const Prix=(props:any)=><p>{props.price}</p>


export default Produit