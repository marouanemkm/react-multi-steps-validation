import './Card.css';
import React from 'react';

export default function CardBegin(props) {
    return (
        <div className='card'>
            <h1>🍣 Aide nous à raviver tes papilles 🌶️</h1>
            <button onClick={() => props.modifyIndex(2)}>COMMENCER</button>
        </div>
    );
}