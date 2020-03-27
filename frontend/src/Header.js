import React from 'react';
/*
function Header é diferente de <header>, este ultimo é um elemento header do html
*/
export default function Header({children}){ //Usando desestruturação para não receber o props inteiro (props)
    return(
        <header> 
            <h1>{children}</h1>
        </header>
    );
}