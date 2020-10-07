import React from 'react';

export default (props) => {
    const {min, max} = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return(
    <>
        <h2>O número aleatório entre {props.min} e {props.max} é {aleatorio}</h2>
    </>)
}