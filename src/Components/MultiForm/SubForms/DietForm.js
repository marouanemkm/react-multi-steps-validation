import './SubForm.css';
import { useState } from 'react';

export default function DietForm(props) {

    const [formData, setFormData] = useState({
        dietForm: 'nodiet'
    });

    const prevgentFunc = e => e.preventDefault();

    const handleRadio = e => setFormData({ dietForm: e.target.value });

    return (
        <form className='diet-form' onSubmit={prevgentFunc}>
            <p>Quel est ton regime alimentaire ?</p>

            <label htmlFor="nodiet">Pas de régime particulier</label>
            <input type="radio" onChange={handleRadio} name='diet' id='nodiet' value='nodiet' />

            <label htmlFor="homnivorous">Homnivore</label>
            <input type="radio" onChange={handleRadio} name='diet' id='homnivorous' value='homnivorous' />

            <label htmlFor="vegetarian">Végétarien</label>
            <input type="radio" onChange={handleRadio} name='diet' id='vegetarian' value='vegetarian' />

            <label htmlFor="vegan">Végan</label>
            <input type="radio" onChange={handleRadio} name='diet' id='vegan' value='vegan' />

            <button onClick={() => props.modifyIndex(3, formData)}>VALIDER</button>
        </form>
    );
}