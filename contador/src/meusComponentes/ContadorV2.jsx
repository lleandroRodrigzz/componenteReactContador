import { useState } from 'react';
import './ContadorV2.css';

export default function Contador(props) {
    //                                 _____Valor inicial do estado;
    //                               || 
    //                               \/   
    const [valor,setValor] = useState(0);    //hook, gancho, useState;

    function plus(){
        setValor(valor + 1);
    }

    function less(){
        setValor(valor - 1);
    }

    //é o metodo render?
    return (
        
        <section className="contador-container">
            <h1 className='contadorName'>Contador V2</h1>
            <div className="contador-display">{valor}</div>
            <button className="contador-buttom" onClick={() => {plus()}}>+</button>
            <button className="contador-buttom" onClick={() => {less()}}>-</button>
        </section>
    );
}